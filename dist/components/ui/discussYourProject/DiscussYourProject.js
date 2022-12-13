import React from "react";
import { Link } from "react-router-dom";
import ButtonDiscuss from "../button/ButtonDiscuss";
const DiscussYourProject = () => {
    return (React.createElement("div", { className: "discussYourProject" },
        React.createElement("div", { className: "discussYourProject__wrapper" },
            React.createElement("p", { className: "discussYourProject__wrapper-title" }, "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043E\u0431\u0441\u0443\u0434\u0438\u043C \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442"),
            React.createElement("div", { className: "discussYourProject__wrapper-button" },
                React.createElement(Link, { to: "/discuss" },
                    React.createElement(ButtonDiscuss, { background: "#EEEEEE" }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")))),
        React.createElement("div", { className: "discussYourProject__wrapper-image" })));
};
export default DiscussYourProject;
