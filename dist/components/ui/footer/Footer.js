import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (React.createElement("div", { className: "footer" },
        React.createElement("div", { className: "footer_container" },
            React.createElement("p", null, "Acorn"),
            React.createElement("div", { className: "footer_container-links" },
                React.createElement(Link, { to: "/privacy" },
                    React.createElement("p", { className: "footer_container-privacy" }, "Privacy Policy"),
                    " "),
                React.createElement("p", null, "\u00A9 2018-2023")))));
};
export default Footer;
