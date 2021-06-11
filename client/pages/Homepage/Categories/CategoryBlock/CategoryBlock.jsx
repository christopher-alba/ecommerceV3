import React from "react";
import "./categoryBlock.css";
const CategoryBlock = (props) => {
  return (
    <div className="category-button">
      <img className="category-image" src={props.src} alt="" />
      <div className="category-image-filter" />
      <span className="category-text">{props.text}</span>
    </div>
  );
};

export default CategoryBlock;
