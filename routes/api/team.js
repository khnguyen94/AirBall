const router = require("express").Router();
const sportController = require("../../controller/sportController");

router.route("/")
.get(sportController.findTeam)
.post(sportController.addTeam);

module.exports = router;