const router = require("express").Router();
const sportController = require("../../controller/sportController");

router.route("/")
.get(sportController.findGame)
.post(sportController.addGameToFavorite);

router.route("/:id")
.delete(sportController.removeGameFromFavorite);

module.exports = router;