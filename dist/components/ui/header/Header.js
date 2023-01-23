import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (React.createElement("div", { className: "header" },
        React.createElement("div", { className: "header_container" },
            React.createElement(Link, { to: "/" },
                React.createElement("img", { src: "./images/logo.svg", alt: "logo" })),
            React.createElement("div", { className: "navItems" },
                React.createElement("p", null, "About"),
                React.createElement("p", null, "Portfolio"),
                React.createElement("p", null, "Services")),
            React.createElement("button", { className: "header_button" }, "Contact Us"))));
};
export default Header;
