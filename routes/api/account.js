const router = require("express").Router();
const accountController = require("../../controller/accountController");
const passport = require("passport");
const checkAuth = require("./checkAuth");

router.route("/login").post(passport.authenticate("local"), function(req, res){
    console.log(req.user);
    res.json(req.user);
});

router.route("/signup")
    .post(accountController.createUser);
router.route("/logout")
    .delete((req, res) => {
        console.log("Logout user " + req.user);
        req.logOut();
        res.redirect("/");
    });
router.route("/favorites")
    .get(accountController.getUserFavorites);

module.exports = router;