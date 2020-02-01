const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  city: {type:String},
  fullName: {type:String},
  teamId:{type:String},
  log:{type:String},
  favorites:{type:Boolean}
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;