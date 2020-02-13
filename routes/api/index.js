const router= require("express").Router();
const teamRoutes = require("./team");
const gameRoutes = require("./game");
const accountRoutes = require("./account");

router.use("/game", gameRoutes);
router.use("/team", teamRoutes);
router.use("/account", accountRoutes);

module.exports = router;