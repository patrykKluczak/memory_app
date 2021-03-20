import React, { useState } from "react";
import { useSelector } from "react-redux";

// import Cards from "../../components/Cards";

import MainWrapper from "./styled/MainWrapper";
import MainContent from "./styled/MainContent";
import LogoWrapper from "./styled/LogoWrapper";
import Logo from "./styled/Logo";
import Title from "./styled/Title";
import GameBoard from "./styled/GameBoard";

import {
  selectGameLvl,
  addStorePoints,
  subtractStorePoints,
} from "../../reducers/player";

import { cardsValue, cardsArray, cardsMatch } from "../../utils/generateCards";

const renderCard = (lvl: number) => {
  return null;
};

const Game = () => {
  const [] = useState([]);
  const gameLvl = useSelector(selectGameLvl);

  return (
    <MainWrapper>
      <MainContent>
        <LogoWrapper>
          <Logo />
          <Title bold={true}>Memory App</Title>
        </LogoWrapper>
        <GameBoard>
          {cardsValue(gameLvl)}
          {cardsArray(gameLvl)}

          {/* <Cards cards={cardsArray()} lastFlip={} selected={} selectCard={} /> */}
        </GameBoard>
      </MainContent>
    </MainWrapper>
  );
};

export default Game;
