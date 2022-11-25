import React from "react";
import express from "express";
import serialize from "serialize-javascript";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Login from "../../components/pages/login/Login";
const router = express.Router();
router.get("/login", (req, res) => {
    let cond = true;
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(Login, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Login</title>
                   <link rel="stylesheet" type="text/css" href="./styles/login.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
});
export default router;
