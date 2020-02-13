const router = require("express").Router();
const sportController = require("../../controller/sportController");

router.route("/")
.get(sportController.findTeam)
.post(sportController.addTeam);

router.route("/:id")
.post(sportController.addTeamToFavorite)
.delete(sportController.removeTeamFromFavorite);

module.exports = router;