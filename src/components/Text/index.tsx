import React from "react";

import Wrapper from "./styled/Wrapper";

interface TextProps {
  children: any;
  bold?: boolean;
  props?: any;
}

const Text = ({ children, bold = false, ...props }: TextProps) => (
  <Wrapper bold={bold} {...props}>
    {children}
  </Wrapper>
);

export default Text;
