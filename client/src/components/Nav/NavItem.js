import React from "react";

class NavItem extends React.Component {
  render({children}) {
    return (
      <div>
        <li className="navItem">{children}</li>
      </div>
    );
  }
}

export default NavItem; 
