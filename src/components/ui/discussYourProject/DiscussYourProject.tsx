import React, { FC } from "react";
import { Link } from "react-router-dom";

import ButtonDiscuss from "../button/ButtonDiscuss";

const DiscussYourProject: FC = () => {
  return (
    <div className="discussYourProject">
      <div className="discussYourProject__wrapper">
        <p className="discussYourProject__wrapper-title">
          Let's discuss your project
        </p>
        <div className="discussYourProject__wrapper-button">
          <Link to="/discuss">
            <ButtonDiscuss background="#EEEEEE">Leave a request</ButtonDiscuss>
          </Link>
        </div>
      </div>
      <div className="discussYourProject__wrapper-image"></div>
    </div>
  );
};

export default DiscussYourProject;
