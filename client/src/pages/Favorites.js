import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import EventCard from "../components/EventCard";
import Moment from "moment";
import SideBar from "../components/SideBar/SideBar";
import GameStatsCard from "../components/GameStatsCard";

class Events extends Component {
    // Setting our component's initial state
    state = {
        eventArray: [],
        favGames: [],
        statsArray: [],
        teams: []
    };

    // When the component mounts, load all Events and save them to this.state.events
    componentDidMount() {
        this.loadEvents();
        //this.getTeamsNextGames("bulls");
        API.getAllTeam().then(data => {
            this.setState({
                teams: data.data
            });
            //console.log(this.state.teams);
        })
    }

    // Loads all events and sets them to this.state.events
    loadEvents = () => {
        API.getFavGamesNoAPI()
            .then((res) => {
                console.log(res.data);
                let gamesArray = [];
                res.data.map((game => {
                    gamesArray.push(game.gameId);
                    return true;
                }))
                this.setState({
                    favGames: gamesArray,
                    statsArray: []
                });
                console.log(`Fave Games: ${this.state.favGames}`);
                let tempStats = [];
                for (let i = 0; i < this.state.favGames.length; i++) {
                    API.getGameFromGameId(this.state.favGames[i])
                        .then(gameRes => {
                            if (gameRes.data.api.games[0].statusGame == "Scheduled") {
                                let tempObj = {
                                    finished: false,
                                    game: gameRes.data.api
                                }

                                tempStats.push(tempObj);
                                this.setState({
                                    statsArray: tempStats
                                })
                            }
                            else {
                                API.getGameStats(this.state.favGames[i])
                                    .then(statsRes => {
                                        console.log(`gameRes: ${JSON.stringify(gameRes)}`);
                                        let gameObj = {
                                            finished: true,
                                            homeTeam: gameRes.data.api.games[0].hTeam.nickName,
                                            awayTeam: gameRes.data.api.games[0].vTeam.nickName,
                                            homeTeamLogo: gameRes.data.api.games[0].hTeam.logo,
                                            awayTeamLogo: gameRes.data.api.games[0].vTeam.logo,
                                            gameTime: Moment.utc(gameRes.data.api.games[0].startTimeUTC).utcOffset(-8).format("dddd, MMMM Do YYYY"),
                                            stats: statsRes.data.api.statistics
                                        }
                                        tempStats.push(gameObj);
                                        this.setState({
                                            statsArray: tempStats
                                        })
                                    })
                                    .catch(err => console.log(err));
                            }
                        })
                        .catch(err => console.log(err));
                }
                // console.log(tempStats);
                // this.setState({
                //     statsArray: [...this.state.statsArray, ...tempStats]
                // })
                console.log(`stats array ${this.state.statsArray}`)
            })
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    deleteEvent = id => {
        API.deleteEvent(id)
            .then(res => this.loadEvents())
            .catch(err => console.log(err));
    };

    getTeamsNextGames(teamName) {
        API.getTeamFromName(teamName)
            .then((response) => {
                API.getAllGames(response.data.api.teams[0].teamId)
                    .then((res) => {
                        let lastGameIndex = this.findLastGame(res.data.api.games);
                        let tempArray = res.data.api.games.slice(lastGameIndex, lastGameIndex + 5)
                        console.log(tempArray);
                        this.setState({
                            eventArray: [...this.state.eventArray, ...tempArray]
                        })
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    findLastGame(gameArray) {
        for (let i = 0; i < gameArray.length; i++) {
            if (gameArray[i].statusGame === "Scheduled") {
                return i;
            }
        }
    };

    handleSubmit(gameId, favorited) {
        if (!favorited) {
            let gameData = {
                gameId: gameId
            }

            API.addGameToFavorite(gameData)
                .then(res => {
                    console.log("Game added to favorites!");
                    this.loadEvents();
                    this.setState({ eventArray: this.state.eventArray });
                })
                .catch(err => console.log(err));
            alert("Game Added to Favorites!")
        }
        else {
            API.removeGameFromFavorite(gameId)
                .then(res => {
                    console.log("Game deleted from favorites!")
                    this.loadEvents();
                    this.setState({ eventArray: this.state.eventArray });
                })
                .catch(err => console.log(err));
            alert("Game Removed from Favorites!")
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    {/* <Col size="md-3 sm-12">
                        <Jumbotron>
                            <SideBar teams={this.state.teams} />
                        </Jumbotron>
                    </Col> */}
                    <Col size="md-9 sm-12">
                        <Jumbotron>
                            <h1>Air Ball</h1>
                        </Jumbotron>
                        <Row>
                            {this.state.statsArray.length ? (

                                this.state.statsArray.map(event => {
                                    console.log(`event: ${JSON.stringify(event)}`);
                                    return (
                                        !event.finished ? (


                                            <Col size="md-6 sm-6">
                                                <EventCard
                                                    key={event.game.games[0].gameId}
                                                    homeTeam={event.game.games[0].hTeam.nickName}
                                                    awayTeam={event.game.games[0].vTeam.nickName}
                                                    gameTime={Moment.utc(event.game.games[0].startTimeUTC).utcOffset(-8).format("dddd, MMMM Do YYYY, h:mm a")}
                                                    onClick={() => this.handleSubmit(event.game.games[0].gameId, this.state.favGames.includes(event.game.games[0].gameId))}
                                                    favorited={this.state.favGames.includes(event.game.games[0].gameId)}
                                                    awayTeamLogo={event.game.games[0].vTeam.logo}
                                                    homeTeamLogo={event.game.games[0].hTeam.logo}
                                                >
                                                </EventCard>
                                            </Col>
                                        ) : (
                                                <Col size="md-12">
                                                    <GameStatsCard
                                                        homeTeam={event.homeTeam}
                                                        awayTeam={event.awayTeam}
                                                        gameTime={event.gameTime}
                                                        awayTeamLogo={event.awayTeamLogo}
                                                        homeTeamLogo={event.homeTeamLogo}
                                                        homeTeamRebounds={parseInt(event.stats[0].totReb)}
                                                        awayTeamRebounds={parseInt(event.stats[1].totReb)}
                                                        homeTeamScore={parseInt(event.stats[0].points)}
                                                        awayTeamScore={parseInt(event.stats[1].points)}
                                                        homeTeamOffReb={parseInt(event.stats[0].offReb)}
                                                        awayTeamOffReb={parseInt(event.stats[1].offReb)}
                                                        homeTeamDefReb={parseInt(event.stats[0].defReb)}
                                                        awayTeamDefReb={parseInt(event.stats[1].defReb)}
                                                        homeAssists={parseInt(event.stats[0].assists)}
                                                        awayAssists={parseInt(event.stats[1].assists)}
                                                        homeTOs={parseInt(event.stats[0].turnovers)}
                                                        awayTOs={parseInt(event.stats[1].turnovers)}
                                                        homePaint={parseInt(event.stats[0].pointsInPaint)}
                                                        awayPaint={parseInt(event.stats[1].pointsInPaint)}
                                                        homeFast={parseInt(event.stats[0].fastBreakPoints)}
                                                        awayFast={parseInt(event.stats[1].fastBreakPoints)}
                                                        homeSC={parseInt(event.stats[0].secondChancePoints)}
                                                        awaySC={parseInt(event.stats[1].secondChancePoints)}
                                                    ></GameStatsCard>
                                                </Col>
                                            ))
                                })

                            ) : (
                                    <h3>No Event Results to Display</h3>
                                )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Events;
