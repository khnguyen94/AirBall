import React from "react";
import { Col, Row, Container } from "../Grid";
import "./FavoriteGameBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function FavoriteButtonNew(props) {
  // Set initial state for this component

  // Funtion to switch isFavorite to the other option depending on current state

  return (
    <span>
      <label for={`faveBTNTeamID-${props.gameId}`} className="favoriteCheckbox">
        {/* {this.state.isFavorite && (
            <i class="glyphicon glyphicon-star-empty"></i>
          )}
          {!this.state.isFavorite && <i class="glyphicon glyphicon-star"></i>} */}
        <input
          type="checkbox"
          id="faveBTNTeamID-"
          // onClick={this.changeToFavorite()}
        />
        <i class="glyphicon glyphicon-star-empty"></i>
        <i class="glyphicon glyphicon-star"></i>
        <span>Favorite</span>
      </label>
    </span>
  );
}

export default FavoriteButtonNew;
