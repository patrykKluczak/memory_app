import React from "react";

import MainWrapper from "./styled/MainWrapper";
import MainContent from "./styled/MainContent";
import Logo from "./styled/Logo";
import LogoWrapper from "./styled/LogoWrapper";
import Title from "./styled/Title";

interface LayoutProps {
  children?: any;
}

const Layout = ({ children }: LayoutProps) => (
  <MainWrapper>
    <MainContent>
      <LogoWrapper>
        <Logo />
        <Title bold={true}>Memory App</Title>
      </LogoWrapper>
      {children}
    </MainContent>
  </MainWrapper>
);

export default Layout;
