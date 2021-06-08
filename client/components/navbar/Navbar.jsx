import React, { useEffect } from "react";
import Container from "../JCUX/Container";
import "./navbar.css";

const onSearchbarFocus = () => {
  let form = document.getElementsByClassName("jcux-navbar-searchbar")[0];
  form.style.boxShadow = "0px 0px 10px 5px white";
};

const onSearchbarLoseFocus = () => {
  let form = document.getElementsByClassName("jcux-navbar-searchbar")[0];
  form.style.boxShadow = "none";
};

const NavbarMain = () => {
  useEffect(() => {
    let input = document.getElementsByClassName("jcux-navbar-input")[0];
    input.addEventListener("focusin", onSearchbarFocus);
    input.addEventListener("focusout", onSearchbarLoseFocus);
  });
  return (
    <div className="jcux-navbar-main-outer">
      <Container className="jcux-navbar-container">
        <a className="jcux-navbar-link-wrapper jcux-navbar-item" href="">
          <h1 className="jcux-navbar-brand">eCommerce V3</h1>
        </a>
        <a className="jcux-navbar-link-wrapper jcux-navbar-item" href="">
          <h2 className="jcux-navbar-link">Home</h2>
        </a>
        <a className="jcux-navbar-link-wrapper jcux-navbar-item" href="">
          <h2 className="jcux-navbar-link">Shop</h2>
        </a>
        <form className="jcux-navbar-searchbar jcux-navbar-item" action="/">
          <input
            className="jcux-navbar-input"
            type="text"
            placeholder="search for your item"
          />
          <button className="jcux-navbar-submit" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <button className="jcux-navbar-button jcux-navbar-item">
          <i className="fas fa-shopping-cart"></i> $0.00
        </button>
        <button className="jcux-navbar-button jcux-navbar-item">sign in</button>
        <button className="jcux-navbar-button jcux-navbar-item">sign up</button>
      </Container>
    </div>
  );
};

export default NavbarMain;
