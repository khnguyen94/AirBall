import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import EventCard from "../components/EventCard";
import Moment from "moment";
import SideBar from "../components/SideBar/SideBar";

class Events extends Component {
    // Setting our component's initial state
    state = {
        eventArray: [],
        favGames: [],
        teams: []
    };

    // When the component mounts, load all Events and save them to this.state.events
    componentDidMount() {
        this.loadEvents();
        this.getTeamsNextGames("bulls");
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
                this.setState({ favGames: gamesArray });
                console.log(`Fave Games: ${this.state.favGames}`);
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
                    <Col size="md-3 sm-12">
                        <Jumbotron>
                            <SideBar teams={this.state.teams} />
                        </Jumbotron>
                    </Col>
                    <Col size="md-9 sm-12">
                        <Jumbotron>
                            <h1>Air Ball</h1>
                        </Jumbotron>
                    <Row>
                    {this.state.eventArray.length ? (


                        this.state.eventArray.map(event => {

                            return (
                                <Col size="md-4 sm-6">
                                    <EventCard
                                        key={event.gameId}
                                        homeTeam={event.vTeam.nickName}
                                        awayTeam={event.hTeam.nickName}
                                        gameTime={Moment.utc(event.startTimeUTC).utcOffset(-8).format("dddd, MMMM Do YYYY, h:mm a")}
                                        onClick={() => this.handleSubmit(event.gameId, this.state.favGames.includes(event.gameId))}
                                        favorited={this.state.favGames.includes(event.gameId)}
                                    >
                                    </EventCard>
                                </Col>
                            );
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
