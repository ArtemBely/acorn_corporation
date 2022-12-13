import React from "react";
import express, { Request, Response } from "express";
import serialize from "serialize-javascript";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

import DiscussProject from "../../components/pages/discussProject/DiscussProject";

const router = express.Router();

router.get("/discuss", (req: Request, res: Response) => {
  let cond = true;
  const congrats = renderToString(
    <StaticRouter>
      <DiscussProject />
    </StaticRouter>
  );

  res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Discuss your project</title>
                   <link rel="stylesheet" type="text/css" href="./styles/discuss.css">
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
