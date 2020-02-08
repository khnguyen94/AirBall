import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
//import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

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
    //this.loadEvents();
  }

  // Loads all events and sets them to this.state.events
  loadEvents = () => {
    API.getAllGames()
      .then(res =>
        this.setState({
          eventArray: res.data,
          awayTeam: "",
          homeTeam: "",
          gameDateTime: ""
        })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteEvent = id => {
    API.deleteEvent(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Air Ball</h1>
            </Jumbotron>

            {this.state.eventArray.length ? (
              <List>
                {this.state.eventArray.map(event => {
                  return (
                    <ListItem key={event._id}>
                      <a href={"/events/" + event._id}>
                        <strong>
                          {event.awayTeam} vs.  {event.homeTeam} @ {event.gameDateTime}
                        </strong>
                      </a>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Event Results to Display</h3>
              )}

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Events;
