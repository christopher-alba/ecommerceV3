import React from "react";
import Categories from "./Categories";
import Hero from "./Hero";
import "./homepage.css";
import TopPicks from "./TopPicks";
const Homepage = () => {
  return (
    <>
      <Hero />
      <TopPicks />
      <Categories />
    </>
  );
};

export default Homepage;
