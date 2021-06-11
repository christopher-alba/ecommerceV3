import React from "react";
import "./title.css";

const Title = (props) => {
  return (
    <div className="title-wrapper">
      <h1 className="title">{props.text}</h1>
      <div className="title-decor" />
    </div>
  );
};

export default Title;
