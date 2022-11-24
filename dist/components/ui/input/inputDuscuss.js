import React from "react";
import "../../../../public/styles/discuss.css";
const InputDuscuss = ({ value, setValue, placeholder, disabled, }) => {
    return (React.createElement("input", { className: "discuss-input", placeholder: placeholder, value: value, onChange: (e) => setValue(e.target.value), disabled: disabled }));
};
export default InputDuscuss;
