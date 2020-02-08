import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./FavoriteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class FavoriteBtn extends Component {
  // Set initial state for this component
  state = {
    isFavorite: false
  };

  // Funtion to switch isFavorite to the other option depending on current state
  toggleFavorite = (event) => {
    event.preventDefault();
    this.setState(state => ({
      isFavorite: !state.isFavorite
    }))
    .then()
  };

  render() {
    return (
      <Container>
        <label for="faveBTNTeamID-" className="favoriteCheckbox">
          {this.state.isFavorite && <i class="glyphicon glyphicon-star-empty"></i>}
          {!this.state.isFavorite && <i class="glyphicon glyphicon-star"></i>}
          <input type="checkbox" id="faveBTNTeamID-" onClick={this.toggleFavorite}/>
            <i class="glyphicon glyphicon-star-empty"></i>
            <i class="glyphicon glyphicon-star"></i>
          <span>Favorite</span>
        </label>
      </Container>
    )
  }
}

export default FavoriteBtn;






