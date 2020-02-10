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

  // Add team to favorite - done OPEN TO USER
  updateTeamFavorite: function(teamId, isFavorite){
    return axios.put("/api/team/" + teamId, {"favorite": isFavorite});
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