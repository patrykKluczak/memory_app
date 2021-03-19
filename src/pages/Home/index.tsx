import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import MainWrapper from "./styled/MainWrapper";
import MainContent from "./styled/MainContent";
import Button from "./styled/Button";
import Input from "./styled/Input";
import Wrapper from "./styled/Wrapper";
import ErrorMessage from "./styled/ErrorMessage";

import { setStoreUserName } from "../../reducers/player";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [validName, setValidName] = useState(false);

  const validUserName = (name: string) => {
    const regName = /\b[a-zA-Z]+.+[?^ ][a-zA-Z].{1,19}|\b[a-zA-Z]+.+[?^,][a-zA-Z].{1,35}/g;
    const isValid = name.length ? regName.test(name) : false;
    setValidName(isValid);
  };

  const handleUserName = (name: string) => {
    validUserName(name);
    setUserName(name);
  };

  const handleButtonClick = () => {
    dispatch(setStoreUserName(userName));

    history.push("/game");
  };

  return (
    <MainWrapper>
      <MainContent>
        <Wrapper>
          <Input
            minLength={2}
            debounceTimeout={300}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleUserName(event.target.value)
            }
          />
          {!validName && userName && (
            <ErrorMessage bold={false}>Invalid user name</ErrorMessage>
          )}
          <Button active={validName} onClick={handleButtonClick}>
            Enter
          </Button>
        </Wrapper>
      </MainContent>
    </MainWrapper>
  );
};

export default Home;
