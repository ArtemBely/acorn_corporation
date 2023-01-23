import React, { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/">
          <img src="./images/logo.svg" alt="logo" />
        </Link>
        <div className="navItems">
          <p>About</p>
          <p>Portfolio</p>
          <p>Services</p>
        </div>
        <button className="header_button">Contact Us</button>
      </div>
    </div>
  );
};

export default Header;
