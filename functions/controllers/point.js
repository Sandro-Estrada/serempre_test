const admin = require("firebase-admin");
const ErrorController = require("../lib/controllers/ErrorController");
const PointValidator = require("../lib/validators/PointValidator");
const {cleanUndefinedParams, isEmptyObject} = require("../lib/utils");

const db = admin.firestore();

const createPreconditions = (req, res, next) => {
  const body = JSON.parse(JSON.stringify(req.body));

  const errors = PointValidator.validate(body);

  if (errors.length) {
    return ErrorController.validationError(req, res, {errors});
  }

  return next();
};

const create = async (req, res) => {
  try {
    const {
      userId,
      quantity,
      reason,
    } = req.body;
    await db.collection("users")
        .doc(userId)
        .collection("points")
        .add({quantity, reason});
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

  return next();
};

const update = async (req, res) => {
  try {
    const {userId, pointId} = req.params;
    const body = req.body;
    await db.collection("users")
        .doc(userId)
        .collection("points")
        .doc(pointId)
        .update(body);
    return res.status(204).json();
  } catch (e) {
    return ErrorController.serverError(req, res, {err: e});
  }
};

const deletePoint = async (req, res) => {
  try {
    const {userId, pointId} = req.params;
    await db.collection("users")
        .doc(userId)
        .collection("points")
        .doc(pointId)
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
  deletePoint,
};
