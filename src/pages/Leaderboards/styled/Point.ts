import styled from "styled-components";
import Text from "../../../components/Text";
import { media } from "../../../utils/detection";

export default styled(Text)`
  font-size: 16px;
  text-align: center;

  ${media.tablet`
    font-size: 18px;
  `}
`;
