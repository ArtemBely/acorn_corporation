import React from "react";
const Button = ({ children, onClick, background }) => {
    return (React.createElement("div", { style: { background: background }, className: "button", onClick: onClick }, children));
};
export default Button;
