import React, { useEffect, useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import routes from "./routes";
import Menu from "./ui/menu/Menu";
import "../../public/styles/main.css";
export const App = () => {
    const location = useLocation();
    // костыль, который нужно пофиксить (проблема с адаптивом меню)
    useEffect(() => {
        if (ref.current) {
            if (location.pathname === "/") {
                ref.current.className = "container open";
            }
            else {
                ref.current.className = "container block";
            }
        }
    }, [location.pathname]);
    const ref = useRef(null);
    return (React.createElement("div", { className: "container", ref: ref },
        React.createElement("div", { ref: ref, className: "wrapper__menu" },
            React.createElement(Menu, null)),
        React.createElement(Switch, null, routes.map((route, i) => (React.createElement(Route, { key: i, path: route.path, exact: route.exact, component: route.component }))))));
};
