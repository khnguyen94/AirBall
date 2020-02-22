import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
import "../App.css";
import "./Home.css";
import Jumbotron from "../components/Jumbotron";
import SideBar from "../components/SideBar/SideBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PromiseProvider } from "mongoose";
import API from "../utils/API";
import ReactStarts from "react-stars";
import update from "react-addons-update";
import { isBuffer } from "util";
import EventCard from "../components/EventCard";
import GameStatsCard from "../components/GameStatsCard";
import Moment from "moment";

class Home extends Component {
  constructor(props) {
    super(props);
    this.teamOnClick = this.teamOnClick.bind(this);
  }

  state = {
    allTeams: [],
    next5Games: [],
    past5Games: [],
    teamClickedId: NaN,
    favGames: [],
    favteams: []
  };

  componentDidMount() {
    // API.intializeTeamData();
    this.loadAllTeams();
    this.loadFavTeams();
  }

  loadAllTeams = () => {
    API.getAllTeam().then(data => {
      console.log(data);
      const filteredTeam = data.data.filter(team => team.nbaFranchise === "1");
      filteredTeam.forEach(team => {
        const favNames = this.state.favteams.map(favteam => favteam.fullName);
        if (favNames.includes(team.fullName)) {
          team.favorite = true;
        }
      });
      console.log(filteredTeam);
      this.setState({
        teams: filteredTeam
      });
      console.log(this.state.teams);
    });
  };

  loadFavTeams = () => {
    API.getFavoriteTeam()
      .then(data => {
        console.log(data);
        const favTeamName = data.data;
        this.setState({
          favteams: favTeamName
        });
        console.log(this.state.favteams);
        this.loadAllTeams();
      })
      .catch(err => {
        console.log(err);
        this.loadAllTeams();
      });
  };

  addGametoCalender(event) {
    let locale = event.hTeam.fullName.split(" ")[0];
    let startTime = Moment.utc(event.startTimeUTC)
      .utcOffset(-8)
      .format();
    let endTime = Moment.utc(event.startTimeUTC)
      .utcOffset(-8)
      .add(3, "h")
      .format();
    let calendarEvent = {
      summary: `${event.vTeam.fullName} @ ${event.hTeam.fullName}`,
      location: `${locale}`,
      description: "Score:",
      id: `00000${event.gameId}`,
      start: {
        dateTime: `${startTime}` // start time
      },
      end: {
        dateTime: `${endTime}` // end time
      },
      attendees: [
        { email: "accountEmail@example.com" }, //account Email
        { email: "sbrin@example.com" }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 }
        ]
      }
    };
    API.addCalendarEvent(calendarEvent);
    alert("Game added to calender");
  }

  changeFavTeam = event => {
    const index = event.target.id;
    console.log(event.target.checked);
    console.log(index);
    this.state.teams[index].favorite = event.target.checked;
    this.forceUpdate();
    if (this.state.teams[index].favorite) {
      API.addTeamToFavorite(this.state.teams[index]._id).then(data => {
        this.loadFavTeams();
      });
    } else {
      API.removeTeamFromFavorite(this.state.teams[index]._id).then(data => {
        this.loadFavTeams();
      });
    }
  };

  getTeamsGames(teamName) {
    API.getTeamFromName(teamName)
      .then(response => {
        API.getAllGames(response.data.api.teams[0].teamId)
          .then(res => {
            let lastGameIndex = this.findLastGame(res.data.api.games);
            let tempArray = res.data.api.games.slice(
              lastGameIndex,
              lastGameIndex + 5
            );
            console.log(tempArray);
            this.setState({
              next5Games: res.data.api.games.slice(
                lastGameIndex,
                lastGameIndex + 5
              ),
              past5Games: res.data.api.games.slice(
                lastGameIndex - 5,
                lastGameIndex
              )
            });
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
  }

  handleSubmit(gameId, favorited) {
    if (!favorited) {
      let gameData = {
        gameId: gameId
      };
      API.addGameToFavorite(gameData)
        .then(res => {
          console.log("Game added to favorites!");
          this.loadEvents();
          this.setState({ eventArray: this.state.eventArray });
        })
        .catch(err => console.log(err));
      alert("Game Added to Favorites!");
    } else {
      API.removeGameFromFavorite(gameId)
        .then(res => {
          console.log("Game deleted from favorites!");
          this.loadEvents();
          this.setState({ eventArray: this.state.eventArray });
        })
        .catch(err => console.log(err));
      alert("Game Removed from Favorites!");
    }
  }

  teamOnClick(teamId) {
    API.getAllGames(teamId).then(res => {
      let lastGameIndex = this.findLastGame(res.data.api.games);
      let tempArray = res.data.api.games.slice(
        lastGameIndex - 5,
        lastGameIndex
      );
      this.setState({
        next5Games: res.data.api.games.slice(lastGameIndex, lastGameIndex + 5),
        past5Games: []
      });
      for (let i = 0; i < tempArray.length; i++) {
        API.getGameStats(tempArray[i].gameId)
          .then(res => {
            let gameObj = {
              homeTeam: tempArray[i].hTeam.nickName,
              awayTeam: tempArray[i].vTeam.nickName,
              homeTeamLogo: tempArray[i].hTeam.logo,
              awayTeamLogo: tempArray[i].vTeam.logo,
              gameTime: Moment.utc(tempArray[i].startTimeUTC)
                .utcOffset(-8)
                .format("dddd, MMMM Do YYYY"),
              stats: res.data.api.statistics
            };
            this.setState({
              gameStats: this.state.past5Games.push(gameObj)
            });
            console.log(gameObj);
          })
          .catch(err => console.log(err));
      }
    });
  }

  // Loads all events and sets them to this.state.events
  loadEvents = () => {
    API.getFavGamesNoAPI()
      .then(res => {
        console.log(res.data);
        let gamesArray = [];
        res.data.map(game => {
          gamesArray.push(game.gameId);
          return true;
        });
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

  // Handles onClick of Favorite btn
  handleFavoriteChange(checked) {
    console.log("clicked");
    console.log("teamID: " + this.props.teamId);
    this.setState({ checked }, () => {
      console.log("favorite: " + this.state.checked);
    });
  }

  render() {
    return (
      <div>
        <div className="home">
          <div className="home-wrap">
            <div className="home-inner"></div>
          </div>
        </div>

        <br />
        <br />

        <Row>
          <Col size="md-4 sm-12">
            <Jumbotron>
              {this.state.teams ? (
                <SideBar
                  teams={this.state.teams}
                  favteams={this.state.favteams}
                  changeFavTeam={this.changeFavTeam}
                  clickFunc={this.teamOnClick}
                />
              ) : (
                <p> LOADING </p>
              )}
            </Jumbotron>
          </Col>
            {!this.state.next5Games.length ? (
              <Col size="md-8 sm-12">
              <Jumbotron
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <br />

                <div className="Summary-div">
                  <p>
                    AirBall is the premiere sports notification system. Game
                    summaries can be delivered straight to your email at a
                    customized schedule. While the final score matters most, as
                    sports fans, we all know there is a library of supporting
                    numbers and statistics to understanding what goes on during
                    those 48 minutes.
                  </p>

                  <p>
                    We are pioneering sports analytics into being more more than
                    a game of numbers. Stay up to date with AirBall's visual
                    game summaries. Fans can see their favorite teams and
                    players performance in a simple, graphic presentation.
                  </p>

                  <p>Add your favorite teams to get started!</p>
                </div>
              </Jumbotron>
              </Col>
            ) : (
                <Col size="md-8 sm-12">
                <Row>
                <Col size="md-12 sm-12">
                  <h2>Upcoming Games</h2>
                </Col>
                {this.state.next5Games.map(event => {
                  return (
                    <Col size="md-6 sm-12">
                      <EventCard
                        key={event.gameId}
                        homeTeam={event.hTeam.nickName}
                        awayTeam={event.vTeam.nickName}
                        gameTime={Moment.utc(event.startTimeUTC)
                          .utcOffset(-8)
                          .format("dddd, MMMM Do YYYY, h:mm a")}
                        onClick={() =>
                          this.handleSubmit(
                            event.gameId,
                            this.state.favGames.includes(event.gameId)
                          )
                        }
                        calendarClick={() => this.addGametoCalender(event)}
                        favorited={this.state.favGames.includes(event.gameId)}
                        awayTeamLogo={event.vTeam.logo}
                        homeTeamLogo={event.hTeam.logo}
                      ></EventCard>
                    </Col>
                  );
                })}
                </Row>
                </Col>
                            )}
                <Col size="md-12">
                  <h2>Past 5 Games</h2>
                </Col>
                <Row>
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
                        deleteButton={false}
                      ></GameStatsCard>
                    </Col>
                  );
                })}
              </Row>

        </Row>
      </div>
    );
  }
}

export default Home;
