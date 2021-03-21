import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Menu from "../../components/Menu";

import MainWrapper from "./styled/MainWrapper";
import MainContent from "./styled/MainContent";
import Button from "./styled/Button";
import Input from "./styled/Input";
import Range from "./styled/Range";
import Wrapper from "./styled/Wrapper";
import Message from "./styled/Message";

import {
  setStoreUserName,
  setStoreGameLvl,
  setStoreGameStart,
  clearStorePoints,
} from "../../reducers/player";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [gameLvl, setGameLvl] = useState(3);
  const [validName, setValidName] = useState(false);

  useEffect(() => {
    dispatch(setStoreGameStart(false));
    dispatch(clearStorePoints());
  });

  const validUserName = (name: string) => {
    const regName = /\b[a-zA-Z]+.+[?^ ][a-zA-Z].{1,19}|\b[a-zA-Z]+.+[?^,][a-zA-Z].{1,35}/g;
    const isValid = name.length ? regName.test(name) : false;
    setValidName(isValid);
  };

  const handleUserName = (name: string) => {
    validUserName(name);
    setUserName(name);
  };

  const handleGameRange = (value: string) => {
    setGameLvl(parseInt(value));
  };

  const handleButtonClick = () => {
    dispatch(setStoreUserName(userName));
    dispatch(setStoreGameLvl(gameLvl));

    history.push("/game");
  };

  return (
    <MainWrapper>
      <Menu />
      <MainContent>
        <Wrapper>
          <Input
            minLength={2}
            debounceTimeout={300}
            placeholder="Please, put the user name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUserName(event.target.value)
            }
          />
          {!validName && userName && (
            <Message error={true} bold={false}>
              Invalid user name
            </Message>
          )}
        </Wrapper>

        <Message error={false} bold={true}>
          Set the game difficulty
        </Message>

        <Range
          type="range"
          min="2"
          max="5"
          step="1"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleGameRange(event.target.value)
          }
          value={gameLvl}
        />
        <Button active={validName} onClick={handleButtonClick}>
          Enter
        </Button>
      </MainContent>
    </MainWrapper>
  );
};

export default Home;
