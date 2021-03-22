import React, { ReactNode } from "react";

import Wrapper from "./styled/Wrapper";

interface ButtonProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ active, onClick, children, ...props }: ButtonProps) => (
  <Wrapper active={active} onClick={() => onClick()} {...props}>
    {children}
  </Wrapper>
);

export default Button;
