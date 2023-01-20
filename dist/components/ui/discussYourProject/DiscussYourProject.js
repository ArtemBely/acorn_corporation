import React from "react";
import { Link } from "react-router-dom";
import ButtonDiscuss from "../button/ButtonDiscuss";
const DiscussYourProject = () => {
    return (React.createElement("div", { className: "discussYourProject" },
        React.createElement("div", { className: "discussYourProject__wrapper" },
            React.createElement("p", { className: "discussYourProject__wrapper-title" }, "Let's discuss your project"),
            React.createElement("div", { className: "discussYourProject__wrapper-button" },
                React.createElement(Link, { to: "/discuss" },
                    React.createElement(ButtonDiscuss, { background: "#EEEEEE" }, "Leave a request")))),
        React.createElement("div", { className: "discussYourProject__wrapper-image" })));
};
export default DiscussYourProject;
