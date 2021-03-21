import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Card from "../../components/Card";
import Button from "../../components/Button";

import MainWrapper from "./styled/MainWrapper";
import MainContent from "./styled/MainContent";
import LogoWrapper from "./styled/LogoWrapper";
import Logo from "./styled/Logo";
import Title from "./styled/Title";
import GameBoard from "./styled/GameBoard";
import PointsWrapper from "./styled/PointsWrapper";
import Points from "./styled/Points";

import {
  selectGameLvl,
  setStoreGameStart,
  selectGameStart,
  selectPoints,
  addStorePoints,
  subtractStorePoints,
} from "../../reducers/player";

import { cardsValue, cardsArray, cardsMatch } from "../../utils/generateCards";

const Game = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [cards, setCards] = useState([]);
  const [isFirstLook, setIsFirstLook] = useState(true);
  const [indexCard, setIndexCard] = useState({ first: null, second: null });
  const [valueCard, setValueCard] = useState("");
  const [finishRound, setFinishRound] = useState(false);

  const gameLvl = useSelector(selectGameLvl);
  const gameStart = useSelector(selectGameStart);
  const points = useSelector(selectPoints);

  const handleClickCard = (index: any, value: string): void => {
    if (indexCard.first === null) {
      setIndexCard({ first: index, second: null });
      setValueCard(value);
    } else {
      setIndexCard({ first: indexCard.first, second: index });
    }

    if (valueCard !== "" && value !== valueCard) {
      dispatch(subtractStorePoints(100));
      setValueCard("");
      setTimeout(() => {
        setIndexCard({ first: null, second: null });
      }, 1000);
    } else if (valueCard !== "" && value === valueCard) {
      const tmpCards = [...cards];
      // @ts-ignore
      tmpCards[indexCard.first].flipped = true;
      // @ts-ignore
      tmpCards[index].flipped = true;
      // @ts-ignore
      const allCardsFlipped = tmpCards.find((card) => card.flipped === false);
      if (!allCardsFlipped) {
        setFinishRound(true);
      }

      setCards(tmpCards);
      setValueCard("");
      setIndexCard({ first: null, second: null });
      dispatch(addStorePoints(50));
    }
  };

  const handleNextRound = (): void => {
    if (points >= 0) {
      dispatch(setStoreGameStart(false));
      setIsFirstLook(true);
    } else {
      history.push("/leaderboards");
    }
  };

  useEffect(() => {
    const renderCards = cardsMatch(
      cardsValue(gameLvl),
      cardsArray(gameLvl)
    ) as any;
    setCards(renderCards);
    dispatch(setStoreGameStart(true));
    setTimeout(() => {
      setIsFirstLook(false);
    }, 2000);
  }, [gameStart, dispatch, gameLvl]);

  return (
    <MainWrapper>
      <MainContent>
        <LogoWrapper>
          <Logo />
          <Title bold={true}>Memory App</Title>
        </LogoWrapper>
        <GameBoard>
          {cards.map((card: any, index: number) => {
            return (
              <Card
                key={index}
                isFlipped={
                  index === indexCard.first ||
                  index === indexCard.second ||
                  isFirstLook
                }
                index={index}
                value={card}
                onClick={handleClickCard}
              />
            );
          })}
        </GameBoard>
        <PointsWrapper>
          <Points bold={true}>
            {points >= 0 ? points + " golds" : "Bankrupt!"}
          </Points>
        </PointsWrapper>

        <Button active={finishRound || points < 0} onClick={handleNextRound}>
          {points >= 0 ? "Get more gold" : "Go to leader boards"}
        </Button>
      </MainContent>
    </MainWrapper>
  );
};

export default Game;
