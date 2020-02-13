import axios from "axios";

export default{
  // insert one team to database - done
  saveTeam: function(oneTeamData){
    return axios.post("/api/team", oneTeamData);
  },

  // get all teams from database - done OPEN TO USER
  getAllTeam: function(){
    return axios.get("/api/team");
  },

  // get User's favorite team
  getFavTeam: function(){
    return axios.get("/api/account/favorites");
  },

  // Add team to favorite - done OPEN TO USER
  addTeamToFavorite: function(id){
    return axios.post("/api/team/" + id);
  },

  removeTeamFromFavorite: function(id){
    return axios.delete("/api/team/" + id);
  },

  // get favorite game ids from database
  getAllGames: function(){
    return axios.get("/api/game");
  },
  
  // add game to favorite
  addGameToFavorite: function(gameData){
    return axios.post("/api/game", gameData);
  },

  // remove game from favorite
  removeGameFromFavorite: function(id){
    console.log("DBAPI - removegamefrom favorites");
    return axios.delete("/api/game/" + id);
  }
}