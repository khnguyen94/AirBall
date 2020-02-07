import React from "react";

class ListItem extends React.Component {
  render({children}) {
    return (
      <div>
        <li className="listItem">{children}</li>
      </div>
    );
  }
}

export default ListItem; 
