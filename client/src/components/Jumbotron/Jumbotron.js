import React from "react";

function Jumbotron(props) {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Air Ball - {props.name} </h1>

        {props.slider}

        {props.summary}
        
      </div>
    </div>
  );
}

export default Jumbotron;
