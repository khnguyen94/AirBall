import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import EventCard from "../components/EventCard";
import Moment from "moment";

class Events extends Component {
    // Setting our component's initial state
    state = {
        eventArray: [],
        favGames: []
    };

    // When the component mounts, load all Events and save them to this.state.events
    componentDidMount() {
        this.loadEvents();
    }

    // Loads all events and sets them to this.state.events
    loadEvents = () => {
        console.log("in loadEvents");
        API.getFavGamesNoAPI()
            .then((res) => {
                console.log(res.data);
                let gamesArray = [];
                res.data.map((game => {
                    gamesArray.push(game.gameId);
                    return true;
                }))
                this.setState({ favGames: gamesArray });
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
        API.getTeamFromName("bulls")
            .then((response) => {
                API.getAllGames(response.data.api.teams)
                    .then((res) => {
                        console.log(res.data.api);
                        let lastGameIndex = this.findLastGame(res.data.api.games);
                        console.log(`Last Game Index: ${lastGameIndex}`)
                        let tempArray = res.data.api.games.slice(lastGameIndex, lastGameIndex + 5)
                        console.log(`temp array: ${tempArray}`);
                        this.setState({
                            eventArray: [...this.state.eventArray, ...tempArray]
                        })
                        console.log(JSON.stringify(this.state.eventArray));
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
        if (favorited) {
            let gameData = {
                gameId: gameId
            }
            API.addGameToFavorite(gameData)
                .then(res => {
                    console.log("Game added to favorites!");
                    this.loadEvents();
                })
                .catch(err => console.log(err));
        }
        else {
            API.removeGameFromFavorite(gameId)
                .then(res => {
                    console.log("Game deleted from favorites!")
                    this.loadEvents();
                })
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Air Ball</h1>
                        </Jumbotron>
                    </Col>
                    {this.state.eventArray.length ? (


                        this.state.eventArray.map(event => {

                            return (
                                <Col size="md-6">
                                    <EventCard
                                        key={event.gameId}
                                        homeTeam={event.vTeam.nickName}
                                        awayTeam={event.hTeam.nickName}
                                        gameTime={Moment.utc(event.startTimeUTC).utcOffset(-8).format("dddd, MMMM Do YYYY, h:mm a")}
                                        onClick={() => this.handleSubmit(event.gameId, this.favGames.includes(event.gameId))}
                                        favorited={this.favGames.includes(event.gameId)}
                                    >
                                    </EventCard>
                                </Col>
                            );
                        })

                    ) : (
                            <h3>No Event Results to Display</h3>
                        )}

                </Row>
            </Container>
        );
    }
}

export default Events;
