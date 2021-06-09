import React from "react";
import "./container.css";

const JCUXContainer = (props) => {
  return (
    <div className={"jcux-container " + (props.className !== undefined ? props.className : "")}>{props.children}</div>
  );
};

export default JCUXContainer;
