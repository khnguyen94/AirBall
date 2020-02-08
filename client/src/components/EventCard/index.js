import React from "react";
import FavoriteBtn from "../FavoriteGameBtn";
//import { FormBtn } from "../Form";

// This file exports both the List and ListItem components

function BookCard(props) {
  return (
    <div className="card" key={props.key}>
      <div className="card-body">
        <h5 className="card-title">
          {props.homeTeam} VS. {props.awayTeam}
        </h5>
        <p className="card-text">
          {props.date} @ {props.gameTime}
        </p>
      </div>
      {/*<FormBtn onClick={props.onClickFunc} buttonStyle={props.buttonStyle}>{props.buttonTitle}</FormBtn> */}
    </div>
  );
}

export default BookCard;
