import React, { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <p>Acorn</p>
        <div className="footer_container-links">
          <Link to="/privacy">
            <p className="footer_container-privacy">Privacy Policy</p>{" "}
          </Link>
          <p>© 2018-2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
