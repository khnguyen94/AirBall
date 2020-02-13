import React, { Component } from "react";
import Switch from "react-switch";
 
class FavoriteTeamBtn extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="favoriteTeamToggle">
        <label>
          <Switch
          height={15}
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
          />
        </label>
      </div>
    );
  }
}

export default FavoriteTeamBtn; 