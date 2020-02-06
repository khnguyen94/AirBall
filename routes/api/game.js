const router = require("express").Router();
const sportController = require("../../controller/sportController");

router.route("/")
.get(sportController.findGame)
.post(sportController.addGame);

router.route("/:id")
.delete(sportController.removeGame);

module.exports = router;