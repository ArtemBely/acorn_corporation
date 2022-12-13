import React, { FC, ReactNode } from "react";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  onClick?: () => void;
  background: string;
}

const Button: FC<IButtonProps> = ({ children, onClick, background }) => {
  return (
    <div
      style={{ background: background }}
      className="button"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
