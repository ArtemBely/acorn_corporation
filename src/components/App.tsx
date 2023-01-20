import React, { FC, useEffect, useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import routes from "./routes";

import "../../public/styles/main.css";
import Header from "./ui/header/Header";
import Footer from "./ui/footer/Footer";

export const App: FC<any> = () => {
  return (
    <div className="container">
      <Header />
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
      <Footer />
    </div>
  );
};
