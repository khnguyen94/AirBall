const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  gameId: {type:String},
  seasonYear: {type:String},
  startTimeUTC:{type:Date},
  endTimeUTC:{type:Date},
  vTeamId:{
    type:Schema.Types.TeamId,
    required: true,
    ref: 'Team'
  },
  hTeamId:{
    type:Schema.Types.TeamId,
    required: true,
    ref: 'Team'
  }
});

const Game = mongoose.model("Team", gameSchema);

module.exports = Game;