const router= require("express").Router();
const teamRoutes = require("./team");
const gameRoutes = require("./game");
const userRoutes = require("./account");

router.use("/game", gameRoutes);
router.use("/team", teamRoutes);
router.use("/user", userRoutes);

module.exports = router;