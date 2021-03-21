import styled, { css } from "styled-components";
import Text from "../../../components/Text";
import { media } from "../../../utils/detection";

export default styled(Text)<{ error: boolean }>`
  color: ${(props) => props.theme.colors.black};
  margin-top: 24px;

  ${({ error }) =>
    error &&
    css`
      position: absolute;
      top: 26px;
      font-size: 14px;
      color: ${(props) => props.theme.colors.red};
    `}

  ${media.tablet`
    font-size: 18px;

    ${({ error }: any) =>
      error &&
      css`
        top: 30px;
        font-size: 16px;
      `}
    `}
`;
