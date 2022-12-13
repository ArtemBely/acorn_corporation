import React from "react";
const ButtonDiscuss = ({ children, onClick, background = "linear-gradient(232.67deg, #d0ccff -10.38%, #c4e2ff 107.61%)", }) => {
    return (React.createElement("div", { className: "buttonDiscuss", onClick: onClick, style: { background: background } }, children));
};
export default ButtonDiscuss;
