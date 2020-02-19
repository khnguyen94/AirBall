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
import ReactStarts from "react-stars";
import update from 'react-addons-update';
import { isBuffer } from "util";

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
  state = {
    teams: [],
    favteams: []
  }

  componentDidMount() {
    // API.intializeTeamData();
    // TO FIX
    this.loadAllTeams();
    this.loadFavTeams();
  }

  loadAllTeams = () => {
    API.getAllTeam().then(data => {
      console.log(data);
      const filteredTeam = data.data
        .filter(team => team.nbaFranchise === '1');
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
  }

  loadFavTeams = () => {
    API.getFavoriteTeam().then(data => {
      console.log(data);
      const favTeamName = data.data;
      this.setState({
        favteams: favTeamName
      });
      console.log(this.state.favteams);
      this.loadAllTeams();
    });
  }

  changeFavTeam = (event) => {
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
  }

  render() {
    return (
      <Row>
        <Col size="md-4 sm-12">
          <Jumbotron>
            {(this.state.teams) ? <SideBar teams={this.state.teams} favteams={this.state.favteams} changeFavTeam={this.changeFavTeam} /> : <p> LOADING </p>}
          </Jumbotron>
        </Col>

        <Col size="md-8 sm-12">
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
        </Col>
      </Row>
    );
  }
}

export default Home;
