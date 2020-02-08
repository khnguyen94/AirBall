import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import API from "../../utils";
import "./FavoriteTeamBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class FavoriteTeamBtn extends Component {
  // Set initial state for this component
  state = {
    isFavoriteTeam: false
  };

  // Funtion to switch isFavorite to the other option depending on current state
  changeToFavorite = (event, targetTeam, marked) => {
    event.preventDefault();

    const newFavoriteTeam = {
      targetTeam: targetTeam,
      isFavorite: marked
    };

    this.setState({ isFavoriteTeam: true })
      .then(API.addTeamToFavorite(newFavoriteTeam))
      .catch(err => console.log(err));
  };

  render() {
    // destructure isFavorite
    const { isFavoriteTeam } = this.state;

    return (
      <Container>
        <label for="faveBTNTeamID-" className="favoriteCheckbox">
          {/* {this.state.isFavorite && (
            <i class="glyphicon glyphicon-star-empty"></i>
          )}
          {!this.state.isFavorite && <i class="glyphicon glyphicon-star"></i>} */}
          <input
            type="checkbox"
            id="faveBTNTeamID-"
            onClick={this.changeToFavorite()}
          />
          <i class="glyphicon glyphicon-star-empty"></i>
          <i class="glyphicon glyphicon-star"></i>
          <span>Favorite</span>
        </label>
      </Container>
    );
  }
}

export default FavoriteTeamBtn;
