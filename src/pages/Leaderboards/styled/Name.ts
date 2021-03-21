import styled from "styled-components";
import Text from "../../../components/Text";
import { media } from "../../../utils/detection";

export default styled(Text)`
  font-size: 18px;
  text-align: left;
  width: 100%;
  text-transform: uppercase;

  ${media.tablet`
    font-size: 20px;
    width: auto;
  `}
`;
