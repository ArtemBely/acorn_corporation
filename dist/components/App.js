import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import "../../public/styles/main.css";
import Header from "./ui/header/Header";
export const App = () => {
    return (React.createElement("div", { className: "container" },
        React.createElement(Header, null),
        React.createElement(Switch, null, routes.map((route, i) => (React.createElement(Route, { key: i, path: route.path, exact: route.exact, component: route.component }))))));
};
