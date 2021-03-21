import styled, { css } from "styled-components";
import { media } from "../../../utils/detection";

export default styled.button<{ active: boolean }>`
  background-color: ${(props) => props.theme.colors.grey};
  min-width: 168px;
  min-height: 48px;
  padding: 8px 24px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  pointer-events: none;
  border: none;
  transition: background 300ms;
  margin-top: 16px;
  border-radius: 4px;

  ${({ active, theme }) =>
    active &&
    css`
      cursor: pointer;
      pointer-events: all;
      background-color: ${theme.colors.yellow};

      &:hover {
        background-color: ${theme.colors.yellowDark};
      }
    `};

  ${media.tablet`
      font-size: 18px;
      min-width: 218px;
      min-height: 58px;
    `}
`;
