import React from "react";
import { Link } from "react-router-dom";
import "./categoryBlock.css";
const CategoryBlock = (props) => {
  return (
    <Link to={props.location} className="category-button">
      <img className="category-image" src={props.src} alt="" />
      <div className="category-image-filter" />
      <span className="category-text">{props.text}</span>
    </Link>
  );
};

export default CategoryBlock;
