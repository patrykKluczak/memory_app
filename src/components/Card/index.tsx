import React from "react";

import Wrapper from "./styled/Wrapper";
import Element from "./styled/Element";
import Avers from "./styled/Avers";
import Revers from "./styled/Revers";
import Sing from "./styled/Sign";

interface CardProps {
  isFlipped: boolean;
  value: { sign: string; flipped: boolean };
  index: number;
  onClick: (index: number, sign: string) => void;
}

const Card = ({
  isFlipped,
  value: { sign, flipped },
  onClick,
  index,
}: CardProps) => {
  return (
    <Wrapper
      onClick={() => {
        if (!flipped) {
          onClick(index, sign);
        }
      }}
    >
      <Element isFlipped={isFlipped || flipped}>
        <Avers />
        <Revers>
          <Sing bold={true}>{sign}</Sing>
        </Revers>
      </Element>
    </Wrapper>
  );
};

export default Card;
