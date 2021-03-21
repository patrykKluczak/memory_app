import styled from "styled-components";
import Text from "../../../components/Text";

export default styled(Text)`
  text-align: center;
  color: ${(props) => props.theme.colors.yellowDark};
  font-size: 18px;
  transform: translateY(-10px);
`;
