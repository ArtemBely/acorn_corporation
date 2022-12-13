import React, { FC, ReactNode } from "react";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  onClick?: () => void;
  background?: string;
}

const ButtonDiscuss: FC<IButtonProps> = ({
  children,
  onClick,
  background = "linear-gradient(232.67deg, #d0ccff -10.38%, #c4e2ff 107.61%)",
}) => {
  return (
    <div
      className="buttonDiscuss"
      onClick={onClick}
      style={{ background: background }}
    >
      {children}
    </div>
  );
};

export default ButtonDiscuss;
