import { FC, useState } from "react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { links } from "./data";

const Menu: FC = () => {
  // текущий язык сайта + манипуляции с ним
  const [lang, setLang] = useState(
    typeof window != "undefined" ? localStorage.getItem("i18nextLng") : "En"
  );

  let location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    setLang(lang === "Ru" ? "En" : "Ru");
    i18n.changeLanguage(lang === "Ru" ? "En" : "Ru");
  };
  return (
    <div className="menu">
      <div className="menu__header">
        <NavLink to="/">
          <img src="./images/logo.svg" alt="logo" />
        </NavLink>
        <NavLink to="/login">
          <img src="./images/profile.svg" alt="profile" />
        </NavLink>
      </div>
      <div className="menu__text">
        <p className="menu__text-caption">
          {" "}
          {t("Branding & website development")}
        </p>
        <p className="menu__text-title">{t("via MarTech Perspective")}</p>
        <p className="menu__text-subtitle">
          {t(
            "We develop visual communications using marketing technology for FinTech and Event companies"
          )}
        </p>
      </div>
      {/* array with all links/cards */}
      <div className="menu__links">
        {links.map((link) => (
          <NavLink to={link.block ? "#" : link.to} key={link.id}>
            <div
              className="menu__links-link"
              style={{
                background: `url(${link.image})`,
                filter: location.pathname !== "/" ? "grayscale(100%)" : "none", // если не home page, то цвет карточек ч/б
                opacity: link.block ? 0.5 : 1,
              }}
            >
              <div className="menu__links-link-block">
                <p>{t(link.name)}</p>
                {link.block && (
                  <p className="menu__links-link-block-soon">
                    Will be available soon
                  </p>
                )}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="menu__policy">
        <div className="menu__policy_left">
          <p className="menu__policy-year">© 2022</p>
          <NavLink to="/privacy">
            <p className="menu__policy-privacy">Privacy Policy</p>
          </NavLink>
        </div>
        <p className="menu__policy-lang" onClick={changeLanguage}>
          {lang}
        </p>
      </div>
    </div>
  );
};

export default Menu;
