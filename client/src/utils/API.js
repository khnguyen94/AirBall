import axios from "axios";
import sportAPI from "./sportAPI";

export default{

  getAllTeam: function(){
    sportAPI.getAllTeams();
  },

  getFavoriteTeam: function(){
    // routing
  },

  addTeamToFavorite: function(teamData){
    // Add teamId to database
  },

  removeTeamFromFavorite: function(teamId){
    // REMOVE team from favorite
  },

  getAllGames: function(teamId){
    sportAPI.getAllGames(teamId);
  },

  addGameToFavorite: function(gameData){
    // database call
  },

  removeGameFromFavorite: function(gameId){
    // database call
  },

  // create user 
  
}