import React, { useState } from "react";
import Close from "../../ui/close/Close";
import Heading from "../../ui/heading/Heading";
import InputAuth from "../../ui/input/InputAuth";
import "../../../../public/styles/login.css";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (React.createElement("div", { className: "login" },
        React.createElement("div", { className: "login__wrapper" },
            React.createElement("div", { className: "login__wrappper_top" },
                React.createElement("div", { className: "login__wrapper-header" },
                    React.createElement(Heading, null, "Personal Account"),
                    React.createElement(Close, null)),
                React.createElement("p", { className: "login__wrapper-title" }, "Log In"),
                React.createElement(InputAuth, { placeholder: "Email", value: email, setValue: (e) => setEmail(e) }),
                React.createElement(InputAuth, { placeholder: "Password ", value: password, setValue: (e) => setPassword(e) }),
                React.createElement("button", { className: "login__button-confirm" }, "Confirm")),
            React.createElement("div", { className: "login__wrappper_bottom" },
                React.createElement("p", { className: "login__wrappper_bottom-link" }, "No Account?"),
                React.createElement("p", { className: "login__wrappper_bottom-link" },
                    "Leave an application ",
                    React.createElement("span", null, "to register"),
                    " ",
                    React.createElement("img", { src: "./images/login/arrow.png", alt: "arrow right" })))),
        React.createElement("img", { className: "login__background", src: "./images/login/main_image.jpg", alt: "privacy-background" })));
};
export default Login;
