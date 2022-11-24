import React, { FC, ReactNode } from "react";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  onClick?: () => void;
}

const ButtonDiscuss: FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <div className="buttonDiscuss" onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonDiscuss;
