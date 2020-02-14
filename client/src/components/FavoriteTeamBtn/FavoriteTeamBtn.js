import React, { Component } from "react";
import Switch from "react-switch";
import "./FavoriteTeamBtn.css";
import API from "../../utils/API";
 
class FavoriteTeamBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.onClick = this.onClick.bind(this);
  }
  
  // When the favorite button is clicked, use the API.updateTeamFavorite method to save the newly favorited team's isFavorite property 
  // checked is now set to true
  // Then reload allTeams and favoriteTeams list in sideBar
  onClick(event) {
    event.preventDefault();
    this.setState({ checked: true });
  }

  render() {
    return (
      <div>
        <label className="favoriteTeamToggle">
          <Switch
            height={15}
            onClick={this.onClick}
            checked={this.state.checked}
            {...props}
            className="react-switch"
          />
        </label>
      </div>
    );
  }
}

export default FavoriteTeamBtn; 