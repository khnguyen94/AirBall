const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  city: {type:String},
  fullName: {type:String},
  teamId:{type:String},
  log:{type:String},
  favorites:{type:Boolean},
  // user: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'Account'
  // }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;