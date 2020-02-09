import React, { Component } from "react";
import logo from "./Logo/Air_Ball_Logo.jpg";
import { Col, Row, Container } from "../src/components/Grid";
import "./App.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import { set } from "mongoose";
import { PageItem } from "react-bootstrap";

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
    link: "#",
    hasList: false,
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
    link: "#",
    hasList: true,
    list: [],
    active: false
  },
  {
    label: "Calendar",
    link: "#",
    hasList: false,
    active: false
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

class App extends Component {
  componentDidMount() {

  }


  initializeData = () => {
    /** use set to ensure unique team is inserted to database, as sportAPI might return duplicate team */
    let setTeamId = new Set();
    API.getAllTeam().then(dbData => {
      dbData.data.forEach(oneTeam => {
        setTeamId.add(oneTeam.teamId);
      })
    });

    for (let i = 1; i <= 50; i++) {
      API.getTeam(i).then(function (teamData) {
        teamData.data.api.teams.forEach(oneTeam => 
          {
            if (!setTeamId.has(oneTeam.teamId)){
              API.saveTeam(oneTeam);
              setTeamId.add(oneTeam.teamId);              
              console.log(oneTeam);
            }
          });
      });
    }
  }

  handleOneTimeClick = event => {
    this.initializeData();
  }

  handleTestEvent = event => {
    //test get all team api
    switch (event.target.value) {
      case "getallteam":
        API.getAllTeam().then(data => {
          console.log(data);
        });
        break;
      case "saveteamtofav":
        API.updateTeamFavorite(36, true).then(data => {
          console.log(data);
        });
        break;
      case "getallgame":
        API.getAllGames(40).then(data => {
          console.log(data);
        })
        break;
      case "getfavgame":
        API.getAllFavoriteGames().then(data => {
          console.log(data);
        })
        break;
      case "favoritegame":
        API.addGameToFavorite({gameId: 1001}).then(data => {
          console.log(data);
        })
        break;
      case "unfavoritegame":
        break;
    }

  }

  render() {
    return (
      <Container fluid>
        <div>
          <button onClick={this.handleOneTimeClick}>Click Once</button>
          <button onClick={this.handleTestEvent} value="getallteam">Get All Teams</button>
          <button onClick={this.handleTestEvent} value="saveteamtofav">Save Team To Favorite</button>
          <button onClick={this.handleTestEvent} value="getallgame">Get All Games</button>
          <button onClick={this.handleTestEvent} value="getfavgame">Get All Favorite Games</button>
          <button onClick={this.handleTestEvent} value="favoritegame">Save Game To Favorite</button>
          <button onClick={this.handleTestEvent} value="unfavoritegame">Remove Game From Favorite</button>
        </div>

        <br />
        <Nav logo={logo} links={navLinks}/>

        <br />

        <Row>
          <Col size="md-4 sm-12">
            <Jumbotron>FILLER</Jumbotron>
          </Col>

          <Col size="md-8 sm-12">
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
                  AirBall is the premiere sports notification system. Game
                  summaries can be delivered straight to your email at a
                  customized schedule. While the final score matters most, as
                  sports fans, we all know there is a library of supporting
                  numbers and statistics to understanding what goes on during
                  those 48 minutes.
                </p>

                <p>
                  We are pioneering sports analytics into being more more than a
                  game of numbers. Stay up to date with AirBall's visual game
                  summaries. Fans can see their favorite teams and players
                  performance in a simple, graphic presentation.
                </p>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
