import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
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
import GameStatsCard from "../components/GameStatsCard";
import Moment from "moment";

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
    favGames: [],
    favteams: [],
  }

  componentDidMount() {
    // API.intializeTeamData();
    API.getAllTeam().then(data => {
      this.setState({
        teams: data.data
      });
      console.log(this.state.teams)
    });
    API.getFavoriteTeam().then(data => {
      console.log(data);
      this.setState({
        favteams: data.data
      });
    });
  }

  addGametoCalender(event) {
    let locale = event.hTeam.fullName.split(" ")[0];
    let startTime = Moment.utc(event.startTimeUTC).utcOffset(-8).format();
    let endTime = Moment.utc(event.startTimeUTC).utcOffset(-8).add(3, 'h').format();
    let calendarEvent = {
      'summary': `${event.vTeam.fullName} @ ${event.hTeam.fullName}`,
      'location': `${locale}`,
      'description': 'Score:',
      'id': `${event.gameId}`,
      'start': {
        'dateTime': `${startTime}`, // start time
      },
      'end':{
        'dateTime':  `${endTime}`// end time
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
    API.addCalendarEvent(calendarEvent)
    alert("Game added to calender");
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
              past5Games: res.data.api.games.slice(lastGameIndex - 5, lastGameIndex)
            })
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  findLastGame(gameArray) {
    for (let i = 0; i < gameArray.length; i++) {
      if (gameArray[i].seasonYear == "2019") {
        if (gameArray[i].statusGame === "Scheduled") {
          return i;
        }
      }
    }
    return 300;
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

  teamOnClick(e) {
    e.preventDefault();
    let teamName = e.target.childNodes[0].textContent.split(" ").pop();
    API.getTeamFromName(teamName)
      .then((res) => {
        API.getAllGames(res.data.api.teams[0].teamId)
          .then((res) => {
            let lastGameIndex = this.findLastGame(res.data.api.games);
            let tempArray = res.data.api.games.slice(lastGameIndex - 5, lastGameIndex)
            console.log(`onClick: ${lastGameIndex}`);
            this.setState({
              next5Games: res.data.api.games.slice(lastGameIndex, lastGameIndex + 5),
              //past5Games: res.data.api.games.slice(lastGameIndex - 5, lastGameIndex),
              past5Games: []
            })
            console.log(`last game: ${JSON.stringify(tempArray[0])}`);
             for (let i = 0; i < tempArray.length; i++) {
               console.log(tempArray[i].gameId);
               API.getGameStats(tempArray[i].gameId)
                 .then((res) => {
                   let gameObj = {
                     homeTeam: tempArray[i].hTeam.nickName,
                     awayTeam: tempArray[i].vTeam.nickName,
                     homeTeamLogo: tempArray[i].hTeam.logo,
                     awayTeamLogo: tempArray[i].vTeam.logo,
                     gameTime: Moment.utc(tempArray[i].startTimeUTC).utcOffset(-8).format("dddd, MMMM Do YYYY"),
                     stats: res.data.api.statistics
                   }
                   this.setState({
                     gameStats: this.state.past5Games.push(gameObj)
                  })
                })
                 .catch(err => console.log(err));
            }
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
        <Col size="md-4 sm-12">
          <Jumbotron>
            {(this.state.teams) ? <SideBar teams={this.state.teams} favteams={this.state.favteams} clickFunc={this.teamOnClick} /> : <p> LOADING </p>}
          </Jumbotron>
        </Col>
        <Col size="md-8 sm-12">
          {!this.state.next5Games.length ? (
            <Jumbotron
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
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

              <br />

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
              <Row>
                <Row>
                  <Col size="md-12">
                  <h2>Upcoming Games</h2>
                  </Col>
                {this.state.next5Games.map(event => {
                  return (
                    <Col size="md-6 sm-12">
                      <EventCard
                        key={event.gameId}
                        homeTeam={event.hTeam.nickName}
                        awayTeam={event.vTeam.nickName}
                        gameTime={Moment.utc(event.startTimeUTC).utcOffset(-8).format("dddd, MMMM Do YYYY, h:mm a")}
                        onClick={() => this.handleSubmit(event.gameId, this.state.favGames.includes(event.gameId))}
                        favorited={this.state.favGames.includes(event.gameId)}
                        awayTeamLogo={event.vTeam.logo}
                        homeTeamLogo={event.hTeam.logo}
                        calanderClick={() => this.addGametoCalender(event)}
                      >
                      </EventCard>
                    </Col>
                  )
                })}
                </Row>
                <Row>
                <Col size="md-12">
                  <h2>Past 5 Games</h2>
                </Col>
                {this.state.past5Games.map(event => {
                      return (
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
                          >
                          </GameStatsCard>
                        </Col>
                      )
                })}
                </Row>
              </Row>
            )}
        </Col>
      </Row>
    );
  }
}

export default Home;
