import React from "react";

NavList = ({children}) => {
    return (
        <div className="NavList-container">
          <ul className="NavList-group">{children}</ul>
        </div>
    )
};



export default NavList;