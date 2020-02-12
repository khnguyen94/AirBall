const router = require("express").Router();
const accountController = require("../../controller/accountController");
const passport = require("passport");
const bcrypt = require("bcrypt");

// router.route("/login")
//     .post(
//         passport.authenticate("local", {
//             successRedirect: "/",
//             failureRedirect: "/login",
//             failureFlash: true
//         })
//     );
router.route("/login").post(passport.authenticate("local"), function(req, res){
    console.log(req.user);
    res.json(req.user);
});

router.route("/signup")
    .post(accountController.createUser);
router.route("/logout")
    .delete((req, res) => {
        req.logOut();
        res.redirect("/");
    });

module.exports = router;