import styled from "styled-components";
import { media } from "../../../utils/detection";

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet`
    width: 28%;
  `}
`;
