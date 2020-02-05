const router= require("express").Router();
const teamRoutes = require("./team");
const gameRoutes = require("./game");

router.use("/game", gameRoutes);
router.use("/team", teamRoutes);

module.exports = router;