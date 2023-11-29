import React from "react";
import "./Card.css";
//The component accepts props as its argument. In this case, it is designed to be a generic wrapper that can contain any content
const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;