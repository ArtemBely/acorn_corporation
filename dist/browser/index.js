import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { App } from "../components/App";
import { hydrate } from "react-dom";
import "../i18n.js";
hydrate(React.createElement(BrowserRouter, null,
    React.createElement(Suspense, { fallback: React.createElement("div", null) },
        React.createElement(App, null))), document.getElementById("app"));
