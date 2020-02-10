const db = require("../models");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

module.exports = {
  createUser: function(req, res){
    db.Account
      .create(req.body)
      .then(dbAccount => res.json(dbAccount))
      .catch(err => res.status(422).json(err));
  },

  
}