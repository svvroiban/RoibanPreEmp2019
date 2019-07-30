import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Contact from "../Contact/Contact";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import Button from "../Button/Button";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-top-container">
          <Logo />
          <Contact />
          <Navigation />
        </div>
        <div className="header-bottom-container">
          <Search />
          <Button />
        </div>
      </div>
    );
  }
}
export default Header;
