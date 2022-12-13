import React, { FC } from "react";

import { IInputProps } from "./InputAuth";

import "../../../../public/styles/discuss.css";

const InputDuscuss: FC<IInputProps> = ({
  value,
  setValue,
  placeholder,
  disabled,
  type,
}) => {
  return (
    <input
      className="discuss-input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={disabled}
      type={type}
    />
  );
};

export default InputDuscuss;
