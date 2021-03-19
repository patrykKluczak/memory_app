import styled from "styled-components";
import { media } from "../../../utils/detection";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}
`;
