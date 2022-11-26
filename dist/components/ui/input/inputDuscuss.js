import React from "react";
import "../../../../public/styles/discuss.css";
const InputDuscuss = ({ value, setValue, placeholder, disabled, type, }) => {
    return (React.createElement("input", { className: "discuss-input", placeholder: placeholder, value: value, onChange: (e) => setValue(e.target.value), disabled: disabled, type: type }));
};
export default InputDuscuss;
