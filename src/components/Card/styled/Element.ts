import styled, { css } from "styled-components";

export default styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      pointer-events: none;
      transform: rotateY(180deg);
    `}
`;
