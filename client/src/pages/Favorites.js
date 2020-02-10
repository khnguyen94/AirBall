import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import EventCard from "../components/EventCard";
import Moment from "moment";
import moment from "moment";

class Events extends Component {
    // Setting our component's initial state
    state = {
        eventArray: [],
        awayTeam: "",
        homeTeam: "",
        gameDateTime: ""
    };

    // When the component mounts, load all Events and save them to this.state.events
    componentDidMount() {
        this.loadEvents();
    }

    // Loads all events and sets them to this.state.events
    loadEvents = () => {
        console.log("in loadEvents");
        API.getAllGames(6)
            .then((res) => {
                console.log(res.body.api.games);
                let lastGameIndex = this.findLastGame(res.body.api.games);
                console.log(`Last Game Index: ${lastGameIndex}`)
                let tempArray = res.body.api.games.slice(lastGameIndex, lastGameIndex + 5)
                console.log(`temp array: ${tempArray}`);
                this.setState({
                    eventArray: [...this.state.eventArray, ...tempArray],
                    awayTeam: "",
                    homeTeam: "",
                    gameDateTime: ""
                })
                console.log(JSON.stringify(this.state.eventArray));
            })
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    deleteEvent = id => {
        API.deleteEvent(id)
            .then(res => this.loadEvents())
            .catch(err => console.log(err));
    };

    findLastGame(gameArray) {
        for (let i = 0; i < gameArray.length; i++) {
            if (gameArray[i].statusGame === "Scheduled") {
                return i;
            }
        }
    }



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
                                            gameTime={moment.utc(event.startTimeUTC).utcOffset(-8).format("dddd, MMMM Do YYYY, h:mm a")}
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
