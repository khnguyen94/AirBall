import axios from "axios";
import sportAPI from "./sportAPI";

export default{

  // get all teams from api
  getAllTeam: function(){
    return sportAPI.getAllTeams();
  },

  // get favorite team from database
  getFavoriteTeam: function(){
    return axios.get("/api/team");
  },

  // Add team to favorite
  addTeamToFavorite: function(teamData){
    return axios.post("/api/team", teamData);
  },

  // remove team from favorite
  removeTeamFromFavorite: function(id){
    return axios.delete("/api/team/" + id);
  },

  // get all games of one team from api
  getAllGames: function(teamId){
    return sportAPI.getAllGames(teamId);
  },

  // add game to favorite
  addGameToFavorite: function(gameData){
    return axios.post("/api/game", gameData);
  },

  // remove game from favorite
  removeGameFromFavorite: function(id){
    return axios.delete("/api/game" + id);
  },

}

const axios = require("axios");
const unirest = require("unirest");

module.exports = {
  // Gets all of users favorite team
  getBooks: function() {
    return axios.get("/api/fav-teams");
  },
  // Get the Team Info
  getTeam: function(name) {
    return (
      unirest.get(`https://api-nba-v1.p.rapidapi.com/teams/nickName/${name}`)
      .headers({
	    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	    "x-rapidapi-key": "10fe929c79msh5c73d4ac038c79ep15bd2cjsn28ec07e1adda"
      })
    )
  },
  getSchedule: function(id) {
    return (
      unirest.get(`https://api-nba-v1.p.rapidapi.com/games/teamId/${id}`)
      .headers({
	    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	    "x-rapidapi-key": "10fe929c79msh5c73d4ac038c79ep15bd2cjsn28ec07e1adda"
      })
    )
  },
  getStats: function(gameId) {
    return (
      unirest.get(`https://api-nba-v1.p.rapidapi.com/statistics/games/gameId/${gameId}`)
      .headers({
	    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	    "x-rapidapi-key": "10fe929c79msh5c73d4ac038c79ep15bd2cjsn28ec07e1adda"
      })
    )
  },
  getTeamFromId: function(teamId) {
    return (
      unirest.get(`https://api-nba-v1.p.rapidapi.com/teams/teamId/${teamId}`)
      .headers({
	    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	    "x-rapidapi-key": "10fe929c79msh5c73d4ac038c79ep15bd2cjsn28ec07e1adda"
      })
    )
  }
};
