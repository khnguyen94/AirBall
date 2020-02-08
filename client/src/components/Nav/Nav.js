import React from "react";

function Nav() {
  return (
    <div className="nav">
    <ul>
      <li className="home"><a href="#">Home</a></li>
      <li className="tutorials"><a href="#">Favorites</a></li>
      <li className="about"><a href="#">All Teams</a></li>
      <li className="news"><a href="#">Calendars</a></li>
    </ul>
  </div>
  );
}

export default Nav;
