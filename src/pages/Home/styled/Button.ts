import styled, { css } from "styled-components";

export default styled.button<{ active: boolean }>`
  background-color: ${(props) => props.theme.colors.grey};
  min-width: 168px;
  min-height: 48px;
  padding: 8px 24px;
  font-size: 16px;
  pointer-events: none;
  border: none;
  transition: background 300ms;

  ${({ active, theme }) =>
    active &&
    css`
      cursor: pointer;
      pointer-events: all;
      background-color: ${theme.colors.blue};

      &:hover {
        background-color: ${theme.colors.darkBlue};
      }
    `};
`;
