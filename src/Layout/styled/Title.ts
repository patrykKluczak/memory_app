import styled from "styled-components";
import Text from "../../components/Text";
import { media } from "../../utils/detection";

export default styled(Text)`
  font-size: 36px;
  color: ${(props) => props.theme.colors.yellowLight};
  text-shadow: 1px 1px ${(props) => props.theme.colors.black};

  ${media.tablet`
    font-size: 48px;
  `}
`;
