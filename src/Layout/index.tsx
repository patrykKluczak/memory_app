import React from "react";

import MainWrapper from "./styled/MainWrapper";

interface LayoutProps {
  children?: any;
}

const Layout = ({ children }: LayoutProps) => (
  <MainWrapper>{children}</MainWrapper>
);

export default Layout;
