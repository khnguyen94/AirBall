import axios from "axios";
import unirest from "unirest";

export default {

    // Get the Team Info
    getTeam: function (name) {
        return (
            axios({
                "method": "GET",
                "url": `https://api-nba-v1.p.rapidapi.com/teams/nickName/${name}`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "e858d08557msh539c4b3b4b0a87bp19a67ajsn418d4a3abfaf"
                }
            })
        )
    },

    getStats: function (gameId) {
        return (
            axios({
                "method": "GET",
                "url": `https://api-nba-v1.p.rapidapi.com/statistics/games/gameId/${gameId}`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "e858d08557msh539c4b3b4b0a87bp19a67ajsn418d4a3abfaf"
                }
            })
        )
    },

    getTeamFromId: function (teamId) {
        return (
            axios({
                "method": "GET",
                "url": `https://api-nba-v1.p.rapidapi.com/teams/teamId/${teamId}`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "e858d08557msh539c4b3b4b0a87bp19a67ajsn418d4a3abfaf"
                }
            })
        )
    },

    getGameFromId: function (gameId) {
        return (
            axios({
                "method": "GET",
                "url": `https://api-nba-v1.p.rapidapi.com/games/gameId/${gameId}`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "e858d08557msh539c4b3b4b0a87bp19a67ajsn418d4a3abfaf"
                }
            })
        )
    },

    getGameStats: function (gameId) {
        return (
            axios({
                "method": "GET",
                "url": `https://api-nba-v1.p.rapidapi.com/statistics/games/gameId/${gameId}`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "e858d08557msh539c4b3b4b0a87bp19a67ajsn418d4a3abfaf"
                }
            })
        )
    },

    getSchedule: function (teamId) {
        console.log("sportAPI - getSchedule");
        return (
            axios({
                "method": "GET",
                "url": `https://api-nba-v1.p.rapidapi.com/games/teamId/${teamId}`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "e858d08557msh539c4b3b4b0a87bp19a67ajsn418d4a3abfaf"
                }
            })
        );
    }
};