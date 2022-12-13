import React, { ReactNode } from "react";

export interface IHeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
}

const Heading = ({ children }: IHeadingProps): JSX.Element => {
  return <h1 className="ui__heading">{children}</h1>;
};

export default Heading;
