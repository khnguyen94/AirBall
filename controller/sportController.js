const db = require("../models");

module.exports = {
  findTeam: function (req, res) {
    db.Team
      .find(req.query)
      .then(dbTeam => res.json(dbTeam))
      .catch(err => res.status(422).json(err));
  },
  addTeam: function (req, res) {
    db.Team
      .create(req.body)
      .then(dbTeam => res.json(dbTeam))
      .catch(err => res.status(422).json(err));
  },

  // updateTeam: function (req, res) {
  //   console.log(req.body.isfavorite);
  //   if (req.body.isfavorite) {
  //     db.Team
  //       .findOneAndUpdate({ teamId: req.params.id }, { $push: { user: req.user._id } }, { new: true })
  //       .then(dbTeam => res.json(dbTeam))
  //       .catch(err => res.status(422).json(err));
  //   } else {
  //     db.Team
  //       .findOneAndUpdate({ teamId: req.params.id }, { $pullAll: { user: [req.user._id] } }, { new: true })
  //       .then(dbTeam => res.json(dbTeam))
  //       .catch(err => res.json(err));
  //   }
  // },

  addTeamToFavorite: function (req, res) {
    db.Account.findByIdAndUpdate(req.user._id, { $push: { team: req.params.id } }, { new: true })
      .then(dbAccount => res.json(dbAccount))
      .catch(err => res.status(422).json(err));
  },

  removeTeamFromFavorite: function (req, res) {
    db.Account.findByIdAndUpdate(req.user._id, { $pullAll: { team: req.params.id } }, { new: true })
      .then(dbAccount => res.json(dbAccount))
      .catch(err => res.status(422).json(err));
  },

  addGameToFavorite: function (req, res) {
    db.Game.findOne({ gameId: req.body.gameId }, function (err, dbGame) {
      if (err) return res.json(err);
      if (!dbGame) {
        dbGame.save().then(dbGame => {
          db.Account.findByIdAndUpdate(req.user._id, { $push: { game: req.params.id } }, { new: true })
            .then(dbAccount => res.json(dbAccount))
            .catch(err => res.status(422).json(err));
        })
      } else {
        db.Account.findByIdAndUpdate(req.user._id, { $push: { game: req.params.id } }, { new: true })
          .then(dbAccount => res.json(dbAccount))
          .catch(err => res.status(422).json(err));
      }
    })
  },

  removeGameFromFavorite: function (req, res) {
    db.Account.findByIdAndUpdate(req.user._id, { $pullAll: { game: req.params.id } }, { new: true })
      .then(dbAccount => res.json(dbAccount))
      .catch(err => res.status(422).json(err));
  },

  findGame: function (req, res) {
    db.Game
      .find(req.query)
      .then(dbGame => res.json(dbGame))
      .catch(err => res.status(422).json(err));
  },
  // addGame: function (req, res) {
  //   console.log("add game");
  //   console.log(req.body);
  //   db.Game
  //     .findOneAndUpdate({ gameId: req.body.gameId },
  //       {
  //         $set: { gameId: req.body.gameId },
  //         $push: { user: req.user._id }
  //       },
  //       {
  //         new: true,
  //         upsert: true
  //       })
  //     .then(dbGame => res.json(dbGame))
  //     .catch(err => res.status(422).json(err));
  // },
  // removeGame: function (req, res) {
  //   db.Game
  //     .findOneAndUpdate({ gameId: req.params.id }, {$pullAll: {user: [req.user._id]}}, {new: true})
  //     .then(dbGame => res.json(dbGame))
  //     .catch(err => res.status(422).json(err));
  // }
}