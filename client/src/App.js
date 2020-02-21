import React, { Component } from "react";
import logo from "./Logo/logo.jpg";
import { Col, Row, Container } from "../src/components/Grid";
import "./App.css";
import Nav from "./components/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import { set } from "mongoose";
import { PageItem } from "react-bootstrap";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInBTN from "./components/SignInBTN";
import RegisterBTN from "./components/RegisterBTN";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from "./components/Login/logout"

// Create an array to hold all slider Images
const sliderImages = [
  {
    name: "Image 1",
    url: "https://wallpaperfm.com/img/original/3/6/a/49159.jpg"
  },
  {
    name: "Image 2",
    url:
      "https://images.wallpaperscraft.com/image/paul_pierce_washington_wizards_basketball_nba_103099_1280x720.jpg"
  }
];

// Create an array of NavLinks
const navLinks = [
  {
    label: "Home",
    link: "/",
    hasList: false,
    teamList: [],
    active: true
  },
  {
    label: "All Teams",
    link: "#",
    hasList: true,
    teamList: [],
    active: false
  },
  {
    label: "Favorite Teams",
    link: "/favorites",
    hasList: true,
    list: [],
    active: false
  },
  {
    label: "Calendar",
    link: "#",
    hasList: false,
    teamList: [],
    active: false
  }
];


class App extends Component {
  state = {
    teams: []
  }
  componentDidMount() {
    // API.intializeTeamData();
    //   API.getAllTeam().then(data => {
    //     this.setState({
    //       teams: data.data
    //     });
    //     console.log(this.state.teams);
    //   })
  }

  handleTestEvent = event => {

    //test get all team api
    switch (event.target.value) {
      case "getallteam":
        API.getAllTeam().then(data => {
          console.log(data);
        });
        break;
      case "findfavteam":
        API.getFavoriteTeam().then(data => {
          console.log(data);
        });
        break;
      case "saveteamtofav":
        API.addTeamToFavorite("5e3f8f0a7316ba529974698b").then(data => {
          console.log(data);
        });
        break;
      case "unfavoriteteam":
        API.removeTeamFromFavorite("5e3f8f0a7316ba529974698b").then(data => {
          console.log(data);
        });
        break;
      case "getallgame":
        API.getAllGames(40).then(data => {
          console.log(data);
        });
        break;
      case "getfavgame":
        API.getAllFavoriteGames(console.log);
        break;
      case "favoritegame":
        API.addGameToFavorite({ gameId: 1005 }).then(data => {
          console.log(data);
        });
        break;
      case "unfavoritegame":
        API.removeGameFromFavorite(1005).then(data => {
          console.log("APPJS - removegamefromfavorite")
          console.log(data);
        });
        break;
      case "register":
        API.register({
          username: "bob123",
          password: "123456",
          email: "aa@c",
          firstName: "Bob",
          lastName: "Brown"
        }).then(user => {
          console.log(user);
        });
        break;
      case "signin":
        API.login({ username: "bob123", password: "123456" });
        break;
      case "logout":
        API.logout();
        break;
      case "addevent":
        let calendarEvent = {
          'summary': 'NBA 2020 DEN-UTA',
          'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'Score:',
          'id': "9999900099",
          'start': {
            'dateTime': '2020-02-22T10:00:00Z', // start time
          },
          'end': {
            'dateTime': '2020-02-22T14:00:00Z' // end time
          },
          'attendees': [
            { 'email': 'accountEmail@example.com' }, //account Email
            { 'email': 'sbrin@example.com' },
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              { 'method': 'email', 'minutes': 24 * 60 },
              { 'method': 'popup', 'minutes': 10 },
            ],
          },
        };
        API.addCalendarEvent(calendarEvent);
        break;
    }
  }

  handleSubmitAccount = event => {

  }

  handleSignIn = event => {

  }

  handleSignOut = event => {

  }

  render() {
    return (
      <Router>
        <Container fluid>
          <div>
            <RegisterBTN handleSubmitAccount={this.handleSubmitAccount} />
            <SignInBTN handleSignIn={this.handleSignIn} />
            <Logout handleSignOut={this.handleSignOut} />
            <button onClick={this.handleTestEvent} value="intialize">Click One Time</button>
            <button onClick={this.handleTestEvent} value="findfavteam">Get All Fav Teams</button>
            <button onClick={this.handleTestEvent} value="getallteam">Get All Teams</button>
            <button onClick={this.handleTestEvent} value="saveteamtofav">Save Team To Favorite</button>
            <button onClick={this.handleTestEvent} value="unfavoriteteam">Remove Team From Favorite</button>
            <button onClick={this.handleTestEvent} value="getallgame">Get All Games</button>
            <button onClick={this.handleTestEvent} value="getfavgame">Get All Favorite Games</button>
            <button onClick={this.handleTestEvent} value="favoritegame">Save Game To Favorite</button>
            <button onClick={this.handleTestEvent} value="unfavoritegame">Remove Game From Favorite</button>
            <button onClick={this.handleTestEvent} value="register">Register User</button>
            <button onClick={this.handleTestEvent} value="signin">SignIn User</button>
            <button onClick={this.handleTestEvent} value="logout">LogOut User</button>
            <button onClick={this.handleTestEvent} value="addevent">Add Event To Calendar</button>
          </div>

          <br />
          <Nav logo={logo} links={navLinks}/>

          <br />
          {/* <Home teams={this.state.teams}/> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </Container>
      </Router >
    );
  }
}
export default App;


