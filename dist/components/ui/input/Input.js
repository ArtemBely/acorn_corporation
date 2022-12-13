import React from "react";
import "../../../../public/styles/login.css";
const InputAuth = ({ value, setValue, placeholder }) => {
    return (React.createElement("input", { className: "login-input", placeholder: placeholder, value: value, onChange: (e) => setValue(e.target.value) }));
};
export default InputAuth;
