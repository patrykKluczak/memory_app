import styled from "styled-components";
import Text from "../../Text";
import { media } from "../../../utils/detection";

export default styled(Text)`
  text-transform: uppercase;
  font-size: 56px;

  ${media.tablet`
    font-size: 72px;
  `}
`;
