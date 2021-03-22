import styled from "styled-components";
import { media } from "../../../utils/detection";

export default styled.div`
  width: 96px;
  height: 96px;
  perspective: 320px;
  margin: 8px;

  ${media.tablet`
    width: 136px;
    height: 136px;
    perspective: 320px;
    margin: 12px;
  `}

  ${media.desktop`
    width: 140px;
    height: 140px;
    perspective: 400px;
    margin: 12px;
`}
`;
