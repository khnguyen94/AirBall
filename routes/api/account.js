const router = require("express").Router();
const accountController = require("../../controller/accountController");
const passport = require("passport");

router.route("/login", 
    passport.authenticate("local", {
        successMessage: "Login successfully",
        failureMessage: "Fail to Login",
        failureFlash: true})
);