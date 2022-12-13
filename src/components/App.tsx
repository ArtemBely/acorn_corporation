import React, { FC, useEffect, useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import routes from "./routes";

import Menu from "./ui/menu/Menu";

import "../../public/styles/main.css";

export const App: FC<any> = () => {
  const location = useLocation();

  // костыль, который нужно пофиксить (проблема с адаптивом меню)
  useEffect(() => {
    if (ref.current) {
      if (location.pathname === "/") {
        ref.current.className = "container open";
      } else {
        ref.current.className = "container block";
      }
    }
  }, [location.pathname]);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="container" ref={ref}>
      <div ref={ref} className="wrapper__menu">
        <Menu />
      </div>

      <Switch>
        {routes.map((route: any, i: number) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </div>
  );
};
