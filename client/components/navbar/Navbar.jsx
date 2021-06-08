import React, { useEffect } from "react";
import { InputGroup } from "react-bootstrap";
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
        <h1 className="jcux-navbar-brand jcux-navbar-item">eCommerce V3</h1>
        <h2 className="jcux-navbar-link jcux-navbar-item">Home</h2>
        <h2 className="jcux-navbar-link jcux-navbar-item">Shop</h2>
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
      </Container>
    </div>
  );
};

export default NavbarMain;
