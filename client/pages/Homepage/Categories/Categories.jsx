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
            src="https://meowprint.sg/wp-content/uploads/2018/12/Plain-t-shirts-wallpaper.jpg"
            text="T-SHIRTS"
            location="/products/tshirts"
          />
          <CategoryBlock
            src="https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW18ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            text="PANTS"
            location="/products/pants"
          />
          <CategoryBlock
            src="https://cdn.luxe.digital/media/2021/04/30134651/best-leather-men-jacket-maker-ionic-review-luxe-digital%402x.jpg"
            text="JACKETS"
            location="/products/jackets"
          />
          <CategoryBlock
            src="https://cdn.cnn.com/cnnnext/dam/assets/210602121042-064bs-hanes-womens-stretch-jersey-bike-short.jpg"
            text="SHORTS"
            location="/products/shorts"
          />
        </div>
      </Container>
    </div>
  );
};

export default Categories;
