import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import { media } from "../../../utils/detection";

export default styled(DebounceInput)<any>`
  min-height: 48px;
  min-width: 336px;
  padding: 8px 16px;
  margin-bottom: 16px;
  border-radius: 2px;
  border: none;
  text-align: center;
  font-size: 16px;

  ${media.tablet`
    min-width: 428px;
    text-align: left;
    font-size: 18px;
  `};
`;
