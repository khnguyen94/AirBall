import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import API from "../../utils";
import "./FavoriteGameBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class FavoriteGameBtn extends Component {
  // Set initial state for this component
  state = {
    isFavoriteGame: false
  };

  // Funtion to switch isFavorite to the other option depending on current state
  toggleFavorite = (event, homeTeam, awayTeam, gameTime, marked) => {
    event.preventDefault();

    const newFavoriteGame = {
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      gameTime: gameTime,
      favoriteStatus: marked
    };

    this.setState({ isFavoriteGame : true})
      .then(API.addTeamToFavorite(newFavoriteGame))
      .catch(err => console.log(err));
  };

  render() {
    // destructure isFavorite
    const { isFavorite } = this.state;

    return (
      <Container>
        <label for="faveBTNTeamID-" className="favoriteCheckbox">
          {this.state.isFavorite && (
            <i class="glyphicon glyphicon-star-empty"></i>
          )}
          {!this.state.isFavorite && <i class="glyphicon glyphicon-star"></i>}
          <input
            type="checkbox"
            id="faveBTNTeamID-"
            onClick={this.toggleFavorite}
          />
          <i class="glyphicon glyphicon-star-empty"></i>
          <i class="glyphicon glyphicon-star"></i>
          <span>Favorite</span>
        </label>
      </Container>
    );
  }
}

export default FavoriteGameBtn;
