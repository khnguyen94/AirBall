import React from "react";
import FavoriteButtonNew from "../FavoriteButtonNew";
import "./style.css"
import Image from "react-bootstrap/image"
import { Col, Row, Container } from "../Grid";
import Button from "react-bootstrap/Button";
//import FavoriteBtn from "../FavoriteGameBtn";
//import { FormBtn } from "../Form";

// This file exports both the List and ListItem components

function EventCard(props) {
  return (

    <div className="card" key={props.key}>
      <div className="card-body">
        <Row>
          <Col size="md-3">
            <Image src={props.homeTeamLogo} fluid />
          </Col>
          <Col size="md-6">
          <h5>
            {props.homeTeam} VS. {props.awayTeam} 
          </h5>
          </Col>
          <Col size="md-3">
            <Image src={props.awayTeamLogo} fluid />
          </Col>
        </Row>
        <p className="card-text">
          {props.gameTime}
        </p>
      </div>
      <Row>
        <Col size="md-6">
      <FavoriteButtonNew onClick={props.onClick} favorited={props.favorited}></FavoriteButtonNew>
      </Col>
      <Col size="md-6">
      <Button variant="info">Add Game to Calander</Button>
      </Col>
      </Row>
    </div>

  );
}

export default EventCard;
