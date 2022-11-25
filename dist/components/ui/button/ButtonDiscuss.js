import React from "react";
const ButtonDiscuss = ({ children, onClick }) => {
    return (React.createElement("div", { className: "buttonDiscuss", onClick: onClick }, children));
};
export default ButtonDiscuss;
