import React, { FC } from "react";

import "../../../../public/styles/login.css";

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  setValue: (arg0: string) => void;
  placeholder: string;
  disabled?: boolean;
  type?: string;
}

const InputAuth: FC<IInputProps> = ({ value, setValue, placeholder, type }) => {
  return (
    <input
      className="login-input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
};

export default InputAuth;
