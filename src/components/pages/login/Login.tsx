import React, { FC, useState } from "react";

import Close from "../../ui/close/Close";
import Heading from "../../ui/heading/Heading";
import InputAuth from "../../ui/input/InputAuth";

import "../../../../public/styles/login.css";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__wrappper_top">
          <div className="login__wrapper-header">
            <Heading>Personal Account</Heading>
            <Close />
          </div>
          <p className="login__wrapper-title">Log In</p>
          <InputAuth
            placeholder="Email"
            value={email}
            setValue={(e) => setEmail(e)}
          />
          <InputAuth
            placeholder="Password "
            value={password}
            setValue={(e) => setPassword(e)}
          />
          <button className="login__button-confirm">Confirm</button>
        </div>
        <div className="login__wrappper_bottom">
          <p className="login__wrappper_bottom-link">No Account?</p>
          <p className="login__wrappper_bottom-link">
            Leave an application <span>to register</span>{" "}
            <img src="./images/login/arrow.png" alt="arrow right" />
          </p>
        </div>
      </div>
      <img
        className="login__background"
        src="./images/login/main_image.jpg"
        alt="privacy-background"
      />
    </div>
  );
};

export default Login;
