import React from "react";
import "./FavoriteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class FavoriteBtn extends React.Component {
  render() {
    return (
      <span className="favorite-btn" {...props} role="button" tabIndex="0">
        ✗
      </span>
    );
  }
}

export default FavoriteBtn;
