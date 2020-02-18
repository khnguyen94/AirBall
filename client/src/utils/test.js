const API = require("./API");

test = () => {

      API.getSchedule('8')
        .then(function(res) {
          lastGamePos = findLastGame(res.body.api.games);
          console.log(res.body.api.games[lastGamePos]);
        })
        .catch(err => console.log(err));
};

//test();

function findLastGame(gameArray) {
  for(let i=0; i < gameArray.length; i++) {
    if(gameArray[i].statusGame === "Scheduled") {
      return i;
    }
  }
}

loadGames = (teamName) => {
  API.getTeam(teamName)
    .then((res) => {
      API.getSchedule(res.body.api.teams[0].teamId)
        .then((res) => {
          lastGamePos = findLastGame(res.body.api.games);
          let next8 = [];
          for (let i = lastGamePos; i < lastGamePos + 8; i++) {
            next8.push(res.body.api.games[i]);
          }
          console.log(next8);
          //this.setState({ games: res.data })
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
};

//loadGames("Lakers");

gameStats = (gameId) => {
  API.getStats(gameId)
    .then((res) => {
      console.log(res.body.api.statistics[0]);
    })
}

//gameStats(4399);

teamName = (teamId) => {
  API.getTeamFromId(teamId)
  .then((res) => {
    console.log(res.body.api.teams[0].nickname)
  })
}

teamName(8);