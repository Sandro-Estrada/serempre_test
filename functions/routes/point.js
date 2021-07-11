/* eslint-disable new-cap */
const {Router} = require("express");
const PointController = require("../controllers/point");

const router = Router();

router.post("/", PointController.createPreconditions, PointController.create);
router.patch("/:userId/update/:pointId",
    PointController.updatePreconditions, PointController.update);
router.delete("/:userId/delete/:pointId", PointController.deletePoint);

module.exports = router;

