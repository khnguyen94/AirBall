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
  const rebounds = [
    ["Team", "Rebounds", { role: "style" }],
    [props.homeTeam, props.homeTeamRebounds, "color: blue"],
    [props.awayTeam, props.awayTeamRebounds, "color: red"],
  ];
  const offRebounds = [
    ["Team", "Offensive Rebounds", { role: "style" }],
    [props.homeTeam, props.homeTeamOffReb, "color: blue"],
    [props.awayTeam, props.awayTeamOffReb, "color: red"],
  ];
  const defRebounds = [
    ["Team", "Defensive Rebounds", { role: "style" }],
    [props.homeTeam, props.homeTeamDefReb, "color: blue"],
    [props.awayTeam, props.awayTeamDefReb, "color: red"],
  ];
  const assists = [
    ["Team", "Assists", { role: "style" }],
    [props.homeTeam, props.homeAssists, "color: blue"],
    [props.awayTeam, props.awayAssists, "color: red"],
  ];
  const turnOvers = [
    ["Team", "Turn Overs", { role: "style" }],
    [props.homeTeam, props.homeTOs, "color: blue"],
    [props.awayTeam, props.awayTOs, "color: red"],
  ];
  const paintPoints = [
    ["Team", "Points in the Paint", { role: "style" }],
    [props.homeTeam, props.homePaint, "color: blue"],
    [props.awayTeam, props.awayPaint, "color: red"],
  ];
  const fastBreak = [
    ["Team", "Fast Break Points", { role: "style" }],
    [props.homeTeam, props.homeFast, "color: blue"],
    [props.awayTeam, props.awayFast, "color: red"],
  ];
  const secondChance = [
    ["Team", "Second Chance Points", { role: "style" }],
    [props.homeTeam, props.homeSC, "color: blue"],
    [props.awayTeam, props.awaySC, "color: red"],
  ];
  return (

    <div className="card">
      <div className="card-body">
        <Row>
          <Col size="md-3">
            <Image src={props.homeTeamLogo} fluid/>
          </Col>
          <Col size="md-6">
            <h4>
              {props.homeTeam} VS. {props.awayTeam}
            </h4>
          </Col>
          <Col size="md-3">
            <Image src={props.awayTeamLogo} fluid/>
          </Col>
        </Row>
        <p className="card-text">
          {props.gameTime}
        </p>
        <h3>{props.homeTeamScore} - {props.awayTeamScore}</h3>
      </div>
      <Row>
        <Col size="md-4">
      <Chart
        chartType="BarChart"
        width="100%"
        height="200px"
        data={rebounds}
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
      </Col>
      <Col size="md-4">
      <Chart
        chartType="BarChart"
        width="100%"
        height="200px"
        data={offRebounds}
        options={{
          title: 'Offensive Rebounds',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Offensive Rebounds',
            minValue: 0,
          },
          vAxis: {
            title: 'Team',
          },
        }}
      />
      </Col>
      <Col size="md-4">
      <Chart
        chartType="BarChart"
        width="100%"
        height="200px"
        data={defRebounds}
        options={{
          title: 'Defensive Rebounds',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Defensive Rebounds',
            minValue: 0,
          },
          vAxis: {
            title: 'Team',
          },
        }}
      />
      </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col size="md-6">
        <Chart
        chartType="ColumnChart"
        width="100%"
        height="200px"
        data={assists}
        options={{
          title: 'Assists',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Team',
            minValue: 0,
          },
          vAxis: {
            title: 'Assists',
          },
        }}
      />
        </Col>
        <Col size="md-6">
        <Chart
        chartType="ColumnChart"
        width="100%"
        height="200px"
        data={turnOvers}
        options={{
          title: 'Turn Overs',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Team',
            minValue: 0,
          },
          vAxis: {
            title: 'Turn Overs',
          },
        }}
      />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col size="md-4">
        <Chart
        chartType="PieChart"
        width="100%"
        height="250px"
        data={paintPoints}
        options={{
          title: 'Paint Points',
          pieSliceText: 'value',
        }}
      />
        </Col>
        <Col size="md-4">
        <Chart
        chartType="PieChart"
        width="100%"
        height="250px"
        data={fastBreak}
        options={{
          title: 'Fast Break Points',
          pieSliceText: 'value',
        }}
      />
        </Col>
        <Col size="md-4">
        <Chart
        chartType="PieChart"
        width="100%"
        height="250px"
        data={secondChance}
        options={{
          title: 'Second Chance Points',
          pieSliceText: 'value',
        }}
      />
        </Col>
      </Row>
    </div>

  );
}

export default GameStatsCard;
