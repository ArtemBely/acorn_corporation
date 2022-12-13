import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import Heading from "../../ui/heading/Heading";
import Close from "../../ui/close/Close";

import { portfolio } from "./data";

import "../../../../public/styles/portfolio.css";
import DiscussYourProject from "../../ui/discussYourProject/DiscussYourProject";

const Portfolio: FC = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__header">
        <Heading>Portfolio</Heading>
        <Close />
      </div>
      <div className="portfolio__items">
        {portfolio.map((item) => (
          <NavLink to={item.to} key={item.id}>
            <div
              className="portfolio__items-item"
              style={{ background: `url(${item.image}) center` }}
            >
              <p>{item.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <DiscussYourProject />
    </div>
  );
};

export default Portfolio;
