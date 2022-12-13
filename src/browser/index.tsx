import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { App } from "../components/App";
import { hydrate } from "react-dom";

import "../i18n.js";

hydrate(
  <BrowserRouter>
    <Suspense fallback={<div></div>}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("app")
);
