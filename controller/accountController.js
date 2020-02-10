const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  createUser: function (req, res) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      if (err) {
        return res.status(422).json(err)
      } else {
        db.Account
          .create({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName
          })
          .then(dbAccount => {
            console.log(dbAccount);
            // res.redirect("/login");
            res.json(dbAccount);
          })
          .catch(err => res.status(422).json(err));
      }
    });
  }
}