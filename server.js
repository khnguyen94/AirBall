const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
const bcrypt = require("bcrypt");
const flash  = require("express-flash");
const session = require("express-session");

const initializePassport = require("./config/passport");

initializePassport(passport);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET || "secret",
  resave:false,
  saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/sports"
mongoose.connect(MONGODB_URI);
// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

/** PASSPORT SETUP */
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const db = require("./models");
// const session = require("express-session");

// app.use(session({secret :"cat"}));
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(
//   function(username, password, done){
//     db.Account.findOne({usrname: username}, function(err, user){
//       if (err) {return done(err);}
//       if (!user) {
//         return done(null, false, {message: "Incorrect username."});
//       }
//       if (!user.validatePassword(password)){
//         return done(null, false, {message: "Incorrect Passoword."});
//       }
//       return done(null, user);
//     });
//   }
// ));

// passport.serializeUser(function(user, done){
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done){
//   db.Account.findById(id, function(err, user){
//     done(err, user);
//   })
// })