import styled from "styled-components";
import Text from "../../Text";
import { media } from "../../../utils/detection";

export default styled(Text)`
  font-size: 14px;

  ${media.tablet`
    font-size: 18px;
  `}
`;
