import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "../App.css";
import Jumbotron from "../components/Jumbotron";
import SideBar from "../components/SideBar/SideBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PromiseProvider } from "mongoose";
import API from "../utils/API";
import EventCard from "../components/EventCard";
import Moment from "moment";

// Create an array of NavLinks
const teamsFromAPI = [
  {
    teamName: "Lakers",
    isFavorite: true
  },
  {
    teamName: "Clippers",
    isFavorite: false
  },
  {
    teamName: "Bulls",
    isFavorite: true
  }
];

// Create a settings object for the imageSlider
const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
  className: "slides"
};

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

class Home extends Component {
  constructor(props) {

    super(props);
    
    this.teamOnClick = this.teamOnClick.bind(this);


  }

  state = {
    teams: [],
    next5Games: [],
    past5Games: [],
    teamClickedId: NaN,
    favGames: []
  }

  componentDidMount() {
    // API.intializeTeamData();
    API.getAllTeam().then(data => {
      this.setState({
        teams: data.data
      });
      console.log(this.state.teams);
    })

  }

  getTeamsGames(teamName) {
    API.getTeamFromName(teamName)
        .then((response) => {
            API.getAllGames(response.data.api.teams[0].teamId)
                .then((res) => {
                    let lastGameIndex = this.findLastGame(res.data.api.games);
                    let tempArray = res.data.api.games.slice(lastGameIndex, lastGameIndex + 5)
                    console.log(tempArray);
                    this.setState({
                        next5Games: res.data.api.games.slice(lastGameIndex, lastGameIndex + 5),
                        past5Games: res.data.api.games.slice(lastGameIndex - 6, lastGameIndex - 1)
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

printTeamId(teamId) {

}

teamOnClick(e) {
  e.preventDefault();
  let teamName = e.target.childNodes[0].textContent.split(" ").pop();
    API.getTeamFromName(teamName)
    .then((res) => {
      API.getAllGames(res.data.api.teams[0].teamId)
      .then((res) => {
          let lastGameIndex = this.findLastGame(res.data.api.games);
          let tempArray = res.data.api.games.slice(lastGameIndex, lastGameIndex + 5)
          console.log(`onClick: ${tempArray}`);
          this.setState({
              next5Games: res.data.api.games.slice(lastGameIndex, lastGameIndex + 5),
              past5Games: res.data.api.games.slice(lastGameIndex - 6, lastGameIndex - 1)
          })
      })
       .catch(err => console.log(err));

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

  render() {
    return (
      <Row>
        <Col size="md-3 sm-12">
          <Jumbotron>
            <SideBar teams={this.state.teams} clickFunc={this.teamOnClick}/>
          </Jumbotron>
        </Col>

        <Col size="md-8 sm-12">
          {!this.state.next5Games.length ? (
            <Jumbotron
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <Slider {...settings}>
                {sliderImages.map(image => {
                  return (
                    <div>
                      <img className="sliderImage" src={image.url} />
                    </div>
                  );
                })}
              </Slider>

              <div className="Summary-div">
                <p>
                  AirBall is the premiere sports notification system. Game summaries
                  can be delivered straight to your email at a customized schedule.
                  While the final score matters most, as sports fans, we all know
                  there is a library of supporting numbers and statistics to
                  understanding what goes on during those 48 minutes.
              </p>

                <p>
                  We are pioneering sports analytics into being more more than a
                  game of numbers. Stay up to date with AirBall's visual game
                  summaries. Fans can see their favorite teams and players
                  performance in a simple, graphic presentation.
              </p>
              </div>
            </Jumbotron>
          ) : (
            this.state.next5Games.map(event => {
              return (
              <Col size="md-6 sm-6">
                <EventCard
                  key={event.gameId}
                  homeTeam={event.hTeam.nickName}
                  awayTeam={event.vTeam.nickName}
                  gameTime={Moment.utc(event.startTimeUTC).utcOffset(-8).format("dddd, MMMM Do YYYY, h:mm a")}
                  onClick={() => this.handleSubmit(event.gameId, this.state.favGames.includes(event.gameId))}
                  favorited={this.state.favGames.includes(event.gameId)}
                  awayTeamLogo={event.vTeam.logo}
                  homeTeamLogo={event.hTeam.logo}
                >
                </EventCard>
              </Col>
              )
            })
            )}
        </Col>
      </Row>
    );
  }
}

export default Home;
