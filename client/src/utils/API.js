import axios from "axios";
import sportAPI from "./sportAPI";

export default{

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
    return sportAPI.getSchedule(teamId);
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

