import React from "react";

function Jumbotron(children) {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        
        {children}
        
      </div>
    </div>
  );
}

export default Jumbotron;
