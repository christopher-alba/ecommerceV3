import React from "react";
import Container from "../../../components/JCUX/Container";
import "./hero.css";

const Hero = () => {
  return (
    <div className="homepage-hero">
      <Container className="homepage-hero-container">
        <h1 className="homepage-hero-title">Homepage</h1>
        <button className="homepage-hero-buttons">start shopping</button>
        <button className="homepage-hero-buttons">categories</button>
      </Container>
    </div>
  );
};

export default Hero;