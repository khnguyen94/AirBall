import axios from "axios";
import sportAPI from "./sportAPI";
import dbAPI from "./dbAPI";
import accountAPI from "./accountAPI";

export default {
  // use set to ensure unique team is inserted to database, as sportAPI might return duplicate team - done OPEN TO USER
  intializeTeamData: function () {
    let setTeamId = new Set();
    // add all databse teamid to set
    dbAPI.getAllTeam().then(dbData => {
      dbData.data.forEach(oneTeam => {
        setTeamId.add(oneTeam.teamId);
      });

      // get the team from id 1 ~ 50
      for (let i = 1; i <= 50; i++) {
        sportAPI.getTeamFromId(i).then(function (teamData) {
          teamData.data.api.teams.forEach(oneTeam => {
            if (!setTeamId.has(oneTeam.teamId)) {
              dbAPI.saveTeam(oneTeam);
              setTeamId.add(oneTeam.teamId);
            }
          });
        });
      }
    });
  },

  // get all teams from database - done OPEN TO USER
  getAllTeam: function () {
    return dbAPI.getAllTeam();
  },

  // get favorite team from database - Deprecated
  getFavoriteTeam: function () {
    return axios.get("/api/team");
  },

  // Add/remove team to/from favorite - done OPEN TO USRE
  updateTeamFavorite: function (teamId, isFavorite) {
    return dbAPI.updateTeamFavorite(teamId, isFavorite);
  },

  // get all games of one team from api - done OPEN TO USER
  getAllGames: function (teamId) {
    return sportAPI.getSchedule(teamId);
  },

  // get all favorite games from database - done OPEN TO USER
  getAllFavoriteGames: function (done) {
    const gamearr = [];
    dbAPI.getAllGames().then(dbGame => {
      dbGame.data.forEach(game => {
        sportAPI.getGameFromId(game.gameId).then(oneGame => {
          gamearr.push(oneGame.data.api.games[0]);
        });
      });
      done(gamearr);
    });
  },

  // add game to favorite - done OPEN TO USER
  addGameToFavorite: function (gameData) {
    return dbAPI.addGameToFavorite(gameData);
  },

  // remove game from favorite - done OPEN TO USER
  removeGameFromFavorite: function (gameId) {
    return dbAPI.removeGameFromFavorite(gameId);
  },

  register: function(userData){
    return accountAPI.addAccount(userData);
  },

  signin: function(userData){
    console.log("API - signin");
    return accountAPI.signInAccount(userData);
  }
}

