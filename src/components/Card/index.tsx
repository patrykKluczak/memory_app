import React from "react";

import Wrapper from "./styled/Wrapper";
import Element from "./styled/Element";
import Avers from "./styled/Avers";
import Revers from "./styled/Revers";
import Sing from "./styled/Sign";

interface CardProps {
  isFlipped: boolean;
  value: string;
  index: number;
  onClick: any;
}

const Card = ({ isFlipped, value, onClick, index }: CardProps) => {
  return (
    <Wrapper
      onClick={() => {
        onClick(index, value);
      }}
    >
      <Element isFlipped={isFlipped}>
        <Avers />
        <Revers>
          <Sing bold={true}>{value}</Sing>
        </Revers>
      </Element>
    </Wrapper>
  );
};

export default Card;
