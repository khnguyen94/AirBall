import React from "react";
import Button from "react-bootstrap/Button";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function FavoriteButtonNew(props) {
  // Set initial state for this component
  if (!props.favorited) {
    return (
      <Button variant="primary" onClick={props.onClick}>Add Game To Favorites</Button>
    )
  }
  else {
    return (
      <Button variant="danger" onClick={props.onClick}>Delete Game From Favorites</Button>
    )
  }
}


export default FavoriteButtonNew;