import styled from "styled-components";
import img from "../../../images/points.png";
import { media } from "../../../utils/detection";

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 226px;
  height: 106px;
  background: url(${img}) no-repeat;
  background-size: contain;
  background-position: center;
  margin: 16px auto 24px;

  ${media.tablet`
    width: 268px;
    height: 132px;
  `}

  ${media.desktop`
    margin: 16px auto 8px;
  `}

  ${media.desktopWide`
    margin: 16px auto 16px;
  `}
`;
