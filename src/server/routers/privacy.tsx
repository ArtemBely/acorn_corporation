import React from "react";
import express, { Request, Response } from "express";
import serialize from "serialize-javascript";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

import Privacy from "../../components/pages/privacy/Privacy";

const router = express.Router();

router.get("/privacy", (req: Request, res: Response) => {
  let cond = true;
  const congrats = renderToString(
    <StaticRouter>
      <Privacy />
    </StaticRouter>
  );

  res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Privacy</title>
                   <link rel="stylesheet" type="text/css" href="./styles/privacy.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(
                         cond
                       )}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
});
export default router;
