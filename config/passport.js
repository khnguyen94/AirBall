const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const db = require("../models");

function initialize(passport) {
    const authenticateUser = (username, password, done) => {
        db.Account.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user.username) {
                return done(null, false, { message: "Incorrect username." });
            }
            if (!bcrypt.compare(password, user.password)) {
                return done(null, false, { message: "Incorrect Passoword." });
            }
            return done(null, user);
        });
    }

    passport.use(new LocalStrategy(authenticateUser));
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        db.Account.findById(id, function (err, user) {
            done(err, user);
        })
    })
}


module.exports = initialize;