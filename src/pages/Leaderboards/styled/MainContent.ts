import styled from "styled-components";
import { media } from "../../../utils/detection";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.desktop`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  `}
`;
