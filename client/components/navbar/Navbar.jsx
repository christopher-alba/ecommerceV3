import React, { useEffect, useState } from "react";
import Container from "../JCUX/Container";
import "./navbar.css";
import { Collapse } from "react-bootstrap";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Link } from "react-router-dom";

const onSearchbarFocus = () => {
  let form = document.getElementsByClassName("jcux-navbar-searchbar")[0];
  if (form) {
    form.style.boxShadow = "0px 0px 10px 5px white";
  }
};

const onSearchbarLoseFocus = () => {
  let form = document.getElementsByClassName("jcux-navbar-searchbar")[0];
  if (form) {
    form.style.boxShadow = "none";
  }
};

const toggleMenu = (toggle, value) => {
  toggle(!value);
  let menu = document.getElementsByClassName("jcux-navbar-bars")[0];
  if (menu.classList.contains("fa-bars")) {
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-chevron-up");
  } else {
    menu.classList.add("fa-bars");
    menu.classList.remove("fa-chevron-up");
  }
};
const NavbarMain = () => {
  const windowWidth = useWindowWidth();
  useEffect(() => {
    let input = document.getElementsByClassName("jcux-navbar-input")[0];
    if (input) {
      input.addEventListener("focusin", onSearchbarFocus);
      input.addEventListener("focusout", onSearchbarLoseFocus);
    }
  });
  return windowWidth > 1400 ? <NavbarWide /> : <NavbarNarrow />;
};

const NavbarWide = () => {
  return (
    <div className="jcux-navbar-main-outer">
      <Container className="jcux-navbar-container">
        <Link className="jcux-navbar-link-wrapper jcux-navbar-item" to="/">
          <h1 className="jcux-navbar-brand">eCommerce V3</h1>
        </Link>
        <Link className="jcux-navbar-link-wrapper jcux-navbar-item" to="/">
          <h2 className="jcux-navbar-link">Home</h2>
        </Link>
        <Link className="jcux-navbar-link-wrapper jcux-navbar-item" to="/">
          <h2 className="jcux-navbar-link">Shop</h2>
        </Link>
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

const NavbarNarrow = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="jcux-navbar-main-outer">
      <Container className="jcux-navbar-container-mobile">
        <Link className="jcux-navbar-link-wrapper jcux-navbar-item-mobile" to="/">
          <h1 className="jcux-navbar-brand">eCommerce V3</h1>
        </Link>
        <div>
          <button className="jcux-navbar-button jcux-navbar-item">
            <i className="fas fa-shopping-cart"></i> $0.00
          </button>
          <button
            onClick={() => toggleMenu(setVisible, visible)}
            className="jcux-navbar-button jcux-navbar-item"
          >
            <i className="fas fa-bars jcux-navbar-bars"></i>
          </button>
        </div>
      </Container>
      <Collapse in={visible}>
        <Container className="jcux-navbar-container-mobile-menu">
          <Link className="jcux-navbar-link-wrapper jcux-navbar-item" to="/">
            <h2 className="jcux-navbar-link">Home</h2>
          </Link>
          <Link className="jcux-navbar-link-wrapper jcux-navbar-item" to="/">
            <h2 className="jcux-navbar-link">Shop</h2>
          </Link>
          <div>
            <button className="jcux-navbar-button jcux-navbar-item">
              sign in
            </button>
            <button className="jcux-navbar-button jcux-navbar-item">
              sign up
            </button>
          </div>
        </Container>
      </Collapse>
      <Container className="jcux-navbar-searchbar-mobile-container">
        <form className="jcux-navbar-searchbar jcux-navbar-item">
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
