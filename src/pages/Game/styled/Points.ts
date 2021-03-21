import styled from "styled-components";
import Text from "../../../components/Text";
import { media } from "../../../utils/detection";

export default styled(Text)`
  text-align: center;
  color: ${(props) => props.theme.colors.yellowDark};
  font-size: 18px;
  transform: translateY(-10px);

  ${media.tablet`
    font-size: 22px;
  `}
`;
