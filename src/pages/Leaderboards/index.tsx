import React from "react";

import MainWrapper from "./styled/MainWrapper";
import MainContent from "./styled/MainContent";
import Title from "./styled/Title";
import Result from "./styled/Result";
import Name from "./styled/Name";
import Points from "./styled/Point";
import Lvl from "./styled/Lvl";

import { getLocalResults } from "../../utils/storage";

const Leaderboards = () => {
  const base = JSON.parse(getLocalResults("results") as any);

  return (
    <MainWrapper>
      <MainContent>
        <Title bold={true}>Leaderboards:</Title>
        {Array.isArray(base) ? (
          base.map((el, index) => {
            return (
              <Result key={index}>
                <Name>Name: {el.userName}</Name>
                <Points>Points: {el.points}</Points>
                <Lvl>Lvl: {el.difficult}</Lvl>
              </Result>
            );
          })
        ) : (
          <Name>No result to display</Name>
        )}
      </MainContent>
    </MainWrapper>
  );
};

export default Leaderboards;
