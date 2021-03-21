import React from "react";

import Wrapper from "./styled/Wrapper";

interface ButtonProps {
  active: boolean;
  onClick: () => void;
  children: any;
  props?: any;
}

const Button = ({ active, onClick, children, ...props }: ButtonProps) => (
  <Wrapper active={active} onClick={() => onClick()} {...props}>
    {children}
  </Wrapper>
);

export default Button;
