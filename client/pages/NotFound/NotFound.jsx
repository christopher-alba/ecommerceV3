import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";
const NotFound = () => {
  return (
    <div className="not-found-outer">
      <div className="not-found">
        <i className="fas fa-exclamation-triangle"></i>
        <h1 className="not-found-heading">PAGE NOT FOUND</h1>
        <div className="not-found-links">
          <Link className="not-found-link">back to homepage</Link>
          <Link className="not-found-link">back to shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
