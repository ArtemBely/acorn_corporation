import React from "react";
const Heading = ({ children }) => {
    return React.createElement("h1", { className: "ui__heading" }, children);
};
export default Heading;
