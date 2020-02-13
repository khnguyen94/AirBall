const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  city: {type:String},
  fullName: {type:String},
  teamId:{type:String},
  logo:{type:String},
  favorites:{type:Boolean},
  shortName:{type:String},
  nickName:{type:String},
  nbaFranchise:{type:String},
  favorite:{
    type:Boolean,
    default:false
  }
  // user: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'Account'
  // }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;