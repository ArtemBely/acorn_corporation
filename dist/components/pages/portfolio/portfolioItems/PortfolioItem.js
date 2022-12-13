import React from "react";
import "../../../../../public/styles/portfolioItem.css";
import Close from "../../../ui/close/Close";
import Heading from "../../../ui/heading/Heading";
const PortfolioItem = () => {
    return (React.createElement("div", { className: "portfolioItem" },
        React.createElement("div", { className: "portfolioIttem__header" },
            React.createElement(Heading, null, "Portfolio"),
            React.createElement(Close, null)),
        React.createElement("div", null)));
};
export default PortfolioItem;
