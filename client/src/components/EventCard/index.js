import React from "react";
import FavoriteButtonNew from "../FavoriteButtonNew";
//import FavoriteBtn from "../FavoriteGameBtn";
//import { FormBtn } from "../Form";

// This file exports both the List and ListItem components

function EventCard(props) {
  return (
    <div className="card" key={props.key}>
      <div className="card-body">
        <h5 className="card-title">
          {props.homeTeam} VS. {props.awayTeam}
        </h5>
        <p className="card-text">
          {props.gameTime}
        </p>
      </div>
      <FavoriteButtonNew onClick={props.onClick} favorited={props.favorited}></FavoriteButtonNew>
    </div>
  );
}

export default EventCard;
