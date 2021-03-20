import styled from "styled-components";
import Logo from "../../../components/Logo";
import { media } from "../../../utils/detection";

export default styled(Logo)`
  display: block;
  width: 80px;
  height: 80px;
  margin-right: 16px;

  ${media.tablet`
    width: 120px;
  `}
`;
