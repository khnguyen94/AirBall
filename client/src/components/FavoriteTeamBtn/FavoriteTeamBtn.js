import React, { Component } from "react";
import Switch from "react-switch";
import "./FavoriteTeamBtn.css";
import API from "../../utils/API";

class FavoriteTeamBtn extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    console.log(this.state.checked);
    console.log(this.props.teamId)
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <Switch
          height={15}
          width={30}
          onChange={this.handleChange}
          checked={this.state.checked}
          teamid={this.props.teamId}
          className="react-switch"
        />
      </label>
    );
  }
}

export default FavoriteTeamBtn;
