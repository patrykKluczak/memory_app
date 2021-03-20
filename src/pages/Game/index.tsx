import React, { useState } from "react";
import { useSelector } from "react-redux";

import Card from "../../components/Card";

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

const Game = () => {
  const [indexCard, setIndexCard] = useState([]);

  const gameLvl = useSelector(selectGameLvl);
  const handleClickCard = (index: any, value: string) => {
    console.log(index, value);
    setIndexCard(index);
  };

  return (
    <MainWrapper>
      <MainContent>
        <LogoWrapper>
          <Logo />
          <Title bold={true}>Memory App</Title>
        </LogoWrapper>
        <GameBoard>
          {cardsMatch(cardsValue(gameLvl), cardsArray(gameLvl)).map(
            (card: any, index: number) => {
              return (
                <Card
                  key={index}
                  isFlipped={index === indexCard}
                  index={index}
                  value={card}
                  onClick={handleClickCard}
                />
              );
            }
          )}
        </GameBoard>
      </MainContent>
    </MainWrapper>
  );
};

export default Game;
