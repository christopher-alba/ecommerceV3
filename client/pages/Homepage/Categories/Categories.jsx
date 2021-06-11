import React from "react";
import Container from "../../../components/JCUX/Container";
import Title from "../../../components/JCUX/Title";
import "./categories.css";
import CategoryBlock from "./CategoryBlock";
const Categories = () => {
  return (
    <div className="categories">
      <Container>
        <Title text="Categories" />
        <div className="categories-main-wrapper">
          <CategoryBlock
            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            text="T-SHIRTS"
          />
          <CategoryBlock
            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            text="PANTS"
          />
          <CategoryBlock
            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            text="JACKETS"
          />
          <CategoryBlock
            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            text="SHORTS"
          />
        </div>
      </Container>
    </div>
  );
};

export default Categories;
