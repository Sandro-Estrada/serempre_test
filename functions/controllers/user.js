const admin = require("firebase-admin");
const md5 = require("md5");
const ErrorController = require("../lib/controllers/ErrorController");
const UserValidator = require("../lib/validators/UserValidator");
const {cleanUndefinedParams, isEmptyObject} = require("../lib/utils");

const db = admin.firestore();

const createPreconditions = (req, res, next) => {
  const body = req.body;
  const errors = UserValidator.validate(body);

  if (errors.length) {
    return ErrorController.validationError(req, res, {errors});
  }

  return next();
};

const create = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;
    await db.collection("users")
        .doc()
        .create({name, email, password: md5(password)});
    return res.status(201).json();
  } catch (e) {
    return ErrorController.serverError(req, res, {err: e});
  }
};

const updatePreconditions = (req, res, next) => {
  const body = cleanUndefinedParams(req.body);
  if (isEmptyObject(body)) {
    return ErrorController.validationError(req, res, {errors: "Nothing to update"});
  }
  const {password} = body;
  if (password) {
    body.password = md5(password);
  }
  req.body = body;
  return next();
};

const update = async (req, res) => {
  try {
    const {userId} = req.params;
    const body = req.body;
    await db.collection("users")
        .doc(userId)
        .update(body);
    return res.status(204).json();
  } catch (e) {
    return ErrorController.serverError(req, res, {err: e});
  }
};

const deleteUser = async (req, res) => {
  try {
    const {userId} = req.params;
    await db.collection("users")
        .doc(userId)
        .delete();
    return res.status(204).json();
  } catch (e) {
    return ErrorController.serverError(req, res, {err: e});
  }
};

module.exports = {
  createPreconditions,
  create,
  updatePreconditions,
  update,
  deleteUser,
};
