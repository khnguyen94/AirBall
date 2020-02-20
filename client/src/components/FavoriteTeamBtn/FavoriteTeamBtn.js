import React, { Component } from "react";
import Switch from "react-switch";
import "./FavoriteTeamBtn.css";
import API from "../../utils/API";

class FavoriteTeamBtn extends Component {
  constructor() {
    super();
    this.state = { checked: false };
  }

  render() {
    return (
      <label>
        <Switch
          height={15}
          width={30}
          // onChange={{checked}, () => {this.props.handleFaveChange}}
          checked={this.state.checked}
          teamid={this.props.teamId}
          className="react-switch"
        />
      </label>
    );
  }
}

export default FavoriteTeamBtn;
