const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  username: {type:String},
  password: {type:String},
  email: {type:String},
})

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;