import React from "react";

import Wrapper from "./styled/Wrapper";

interface LogoProps {
  props?: any;
}

const Logo = ({ ...props }: LogoProps) => <Wrapper {...props} />;

export default Logo;
