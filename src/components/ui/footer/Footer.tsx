import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <p>Acorn</p>
        <div className="footer_container-links">
          <p className="footer_container-privacy">Privacy Policy</p>
          <p>© 2018-2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
