import axios from "axios";
import sportAPI from "./sportAPI";
import dbAPI from "./dbAPI";

export default{

  // get one team data from sport API - done
  getTeam: function(teamId){
    return sportAPI.getTeamFromId(teamId);
  },

  // insert one team to database - done
  saveTeam: function(oneTeamData){
    return axios.post("/api/team", oneTeamData);
  },

  intializeTeamData: function(){

  },

  // get all teams from database - done OPEN TO USER
  getAllTeam: function(){
    return dbAPI.getAllTeam();
  },

  // get favorite team from database - Deprecated
  getFavoriteTeam: function(){
    return axios.get("/api/team");
  },

  // Add team to favorite - done OPEN TO USER
  updateTeamFavorite: function(teamId, isFavorite){
    return dbAPI.updateTeamFavorite("/api/team/" + teamId, {"favorite": isFavorite});
  },

  // get all games of one team from api - done OPEN TO USER
  getAllGames: function(teamId){
    return sportAPI.getSchedule(teamId);
  },

  // get all favorite games from database 
  getAllFavoriteGames: function(){
   dbAPI.getAllGames("/api/game").then(dbGame => {
      dbGame.data.forEach(game => {return sportAPI.getSchedule(game.gameId);}
      )
    })
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

