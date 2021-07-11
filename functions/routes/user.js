/* eslint-disable new-cap */
const {Router} = require("express");
const UserController = require("../controllers/user");

const router = Router();

router.post("/", UserController.createPreconditions, UserController.create);
router.patch("/:userId", UserController.updatePreconditions, UserController.update);
router.delete("/:userId", UserController.deleteUser);

module.exports = router;

