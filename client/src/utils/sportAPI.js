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
                    "x-rapidapi-key": "10fe929c79msh5c73d4ac038c79ep15bd2cjsn28ec07e1adda"
                }
            })
        )
    },

    getStats: function (gameId) {
        axios({
            "method": "GET",
            "url": `https://api-nba-v1.p.rapidapi.com/statistics/games/gameId/${gameId}`,
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                "x-rapidapi-key": "10fe929c79msh5c73d4ac038c79ep15bd2cjsn28ec07e1adda"
            }
        })
    },

    getTeamFromId: function (teamId) {
        return (
            axios({
                "method": "GET",
                "url": `https://api-nba-v1.p.rapidapi.com/teams/teamId/${teamId}`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "10fe929c79msh5c73d4ac038c79ep15bd2cjsn28ec07e1adda"
                }
            })
        )
    },

    getSchedule: function (id) {
        console.log("sportAPI - getSchedule");
        return (
            axios({
                "method": "GET",
                "url": `https://api-nba-v1.p.rapidapi.com/games/teamId/${id}`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                    "x-rapidapi-key": "10fe929c79msh5c73d4ac038c79ep15bd2cjsn28ec07e1adda"
                }
            })
        );
    }
};