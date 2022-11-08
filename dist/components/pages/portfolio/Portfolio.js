import React from "react";
import { NavLink } from "react-router-dom";
import Heading from "../../ui/heading/Heading";
import Close from "../../ui/close/Close";
import { portfolio } from "./data";
import "../../../../public/styles/portfolio.css";
const Portfolio = () => {
    return (React.createElement("div", { className: "portfolio" },
        React.createElement("div", { className: "portfolio__header" },
            React.createElement(Heading, null, "Portfolio"),
            React.createElement(Close, null)),
        React.createElement("div", { className: "portfolio__items" }, portfolio.map((item) => (React.createElement(NavLink, { to: item.to, key: item.id },
            React.createElement("div", { className: "portfolio__items-item", style: { background: `url(${item.image})` } },
                React.createElement("p", null, item.name))))))));
};
export default Portfolio;
