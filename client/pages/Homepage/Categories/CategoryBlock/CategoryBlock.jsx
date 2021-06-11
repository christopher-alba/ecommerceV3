import React from "react";
import "./categoryBlock.css";
const CategoryBlock = (props) => {
  const onButtonClick = () => {
    window.location.replace(props.location);
  };
  return (
    <div className="category-button" onClick={onButtonClick}>
      <img className="category-image" src={props.src} alt="" />
      <div className="category-image-filter" />
      <span className="category-text">{props.text}</span>
    </div>
  );
};

export default CategoryBlock;
