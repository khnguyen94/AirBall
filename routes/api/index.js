const router= require("express").Router();
const teamRoutes = require("./team");
const gameRoutes = require("./game");
const accountRoutes = require("./account");
const calendarRoutes = require("./calendar");

router.use("/game", gameRoutes);
router.use("/team", teamRoutes);
router.use("/account", accountRoutes);
router.use("/calendar", calendarRoutes);

module.exports = router;