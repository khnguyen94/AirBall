const db = require("../models");

module.exports = {
  findTeam: function(req, res){
    db.Team
      .find(req.query)
      .then(dbTeam => res.json(dbTeam))
      .catch(err => res.status(422).json(err));
  },
  addTeam: function(req, res){
    db.Team
      .create(req.body)
      .then(dbTeam => res.json(dbTeam))
      .catch(err => res.status(422).json(err));
  },
  findGame: function(req, res){
    db.Game
      .find(req.query)
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  },
  addGame: function(req, res){
    db.Game
      .create(req.body)
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  },
  removeGame: function(req, res){
    db.Game
      .findById({_id:req.params.id})
      .then(dbGame => dbGame.remove())
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, res){
    db.Account
      .create(req.body)
      .then(dbAccount => res.json(dbAccount))
      .catch(err => res.status(422).json(err));
  }
}