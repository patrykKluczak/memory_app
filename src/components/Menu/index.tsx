import React from "react";

import MainWrapper from "./styled/MainWrapper";
import Author from "./styled/Author";
import LinksWrapper from "./styled/LinksWrapper";
import Link from "./styled/Link";

const Menu = () => (
  <MainWrapper>
    <Author bold={true}>Author: Patryk Kluczak</Author>
    <LinksWrapper>
      <Link to="/">Home</Link>
      <Link to="/leaderboards">Results</Link>
    </LinksWrapper>
  </MainWrapper>
);

export default Menu;
