const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  gameId: {type:String},
  // seasonYear: {type:String},
  // startTimeUTC:{type:Date},
  // vTeamId:{
  //   type:Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'Team'
  // },
  // hTeamId:{
  //   type:Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'Team'
  // },
  user:{
    type:Schema.Types.ObjectId,
    required: true,
    ref: 'Account'
  }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;