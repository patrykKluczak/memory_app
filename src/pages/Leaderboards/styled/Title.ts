import styled from "styled-components";
import Text from "../../../components/Text";
import { media } from "../../../utils/detection";

export default styled(Text)`
  font-size: 26px;
  text-align: left;
  margin-bottom: 16px;

  ${media.tablet`
    font-size: 28px;
    margin-bottom: 32px;
  `}
`;
