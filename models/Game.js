// Import dependencies
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema; 

// Use Schema to create a new BookSchema object
var gameSchema = new Schema({
    // Schema for each game to be saved to our DB here
});

// Use mongoose's model method to create our Book model from the above schema
var Game = mongoose.model("Game", gameSchema);

// Export the User model
module.exports = Game;