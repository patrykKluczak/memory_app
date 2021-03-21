import React from "react";

import Menu from "../../components/Menu";

import MainWrapper from "./styled/MainWrapper";
import MainContent from "./styled/MainContent";
import Title from "./styled/Title";
import ResultsWrapper from "./styled/ResultsWrapper";
import Result from "./styled/Result";
import Name from "./styled/Name";
import Points from "./styled/Point";
import Lvl from "./styled/Lvl";

import { getLocalResults } from "../../utils/storage";
import { sortResults, sorts } from "../../utils/sortRanking";

const Leaderboards = () => {
  const base = JSON.parse(getLocalResults("results") as any);
  const sortBase = sortResults(base, sorts);

  return (
    <MainWrapper>
      <Menu />
      <MainContent>
        <Title bold={true}>Leaderboards:</Title>
        <ResultsWrapper>
          {Array.isArray(base) ? (
            base.map((el, index) => {
              return (
                <Result key={index}>
                  <Name bold={true}>Name: {el.userName}</Name>
                  <Points>Points: {el.points}</Points>
                  <Lvl>Lvl: {el.difficult}</Lvl>
                </Result>
              );
            })
          ) : (
            <Name>No result to display</Name>
          )}
        </ResultsWrapper>
      </MainContent>
    </MainWrapper>
  );
};

export default Leaderboards;
