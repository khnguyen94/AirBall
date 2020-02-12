const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  city: { type: String },
  fullName: { type: String },
  teamId: { type: String },
  logo: { type: String },
  shortName: { type: String },
  nickName: { type: String },
  favorite: {
    type: Boolean,
    default: false
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Account'
    }
  ]
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;