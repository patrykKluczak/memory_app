import React, { ReactNode } from "react";

import Wrapper from "./styled/Wrapper";

interface TextProps {
  children: ReactNode;
  bold?: boolean;
}

const Text = ({ children, bold = false, ...props }: TextProps) => (
  <Wrapper bold={bold} {...props}>
    {children}
  </Wrapper>
);

export default Text;
