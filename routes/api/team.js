const router = require("express").Router();
const sportController = require("../../controller/sportController");

router.route("/")
.get(sportController.findTeam)
.post(sportController.addTeam);

router.route("/:id")
.put(sportController.updateTeam);

module.exports = router;