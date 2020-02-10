const router = require("express").Router();
const accountController = require("../../controller/accountController");
const passport = require("passport");
const bcrypt = require("bcrypt");

router.route("/login")
    .post(
        passport.authenticate("local", {
            successRedirect: "/",
            failureRedirect: "/login",
            successMessage: "Login successfully",
            failureMessage: "Fail to Login",
            failureFlash: true
        })
    );

router.route("/signup")
    .post(accountController.createUser);
router.route("/logout")
    .delete((req, res) => {
        req.logOut();
        res.redirect("/");
    });

module.exports = router;