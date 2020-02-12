const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  username: {
    type:String,
    unique:true,
    required:true
  },
  password: {
    type:String,
    required:true
  },
  email: {
    type:String,
    //unique: true
  },
  firstName:{
    type:String
  },
  lastName:{
    type:String
  },
  team:[
    {
      type: Schema.Types.ObjectId,
      ref: "Team"
    }
  ],
  game:[
    {
      type: Schema.Types.ObjectId,
      ref: "Game"
    }
  ]
});

// // validate duplicate email
// accountSchema.path("email").validate(function(value, done){
//   this.model("User").count({email:value}, function(err, count){
//     if (err){ return done(err);}
//     done(!count);
//   });
// }, "Email already exists");

// // validate duplicate username
// accountSchema.path("username").validate(function(value, done){
//   this.model("User").count({email:value}, function(err, count){
//     if (err){ return done(err);}
//     done(!count);
//   });
// }, "Email already exists");

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;