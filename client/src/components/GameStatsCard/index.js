import React from "react";
import FavoriteButtonNew from "../FavoriteButtonNew";
import "./style.css"
import Image from "react-bootstrap/image"
import { Col, Row, Container } from "../Grid";
import { Chart } from "react-google-charts";
//import FavoriteBtn from "../FavoriteGameBtn";
//import { FormBtn } from "../Form";

// This file exports both the List and ListItem components


function GameStatsCard(props) {
  const data = [
    ["Team", "Visitations", { role: "style" }],
    [props.homeTeam, props.homeTeamRebounds, "color: blue"],
    [props.awayTeam, props.awayTeamRebounds, "color: red"],
  ];
  return (

    <div className="card">
      <div className="card-body">
        <Row>
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
      <Chart
      chartType="BarChart"
      width="100%"
      height="200px"
      data={data}
      options={{
        title: 'Total Rebounds',
        chartArea: { width: '50%' },
        hAxis: {
          title: 'Total Rebounds',
          minValue: 0,
        },
        vAxis: {
          title: 'Team',
        },
      }}
      />
    </div>

  );
}

export default GameStatsCard;
