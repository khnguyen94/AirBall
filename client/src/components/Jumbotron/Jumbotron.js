import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        
        {children}
        
      </div>
    </div>
  );
}

export default Jumbotron;
