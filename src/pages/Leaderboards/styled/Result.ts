import styled from "styled-components";
import { media } from "../../../utils/detection";

export default styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.6);
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 12px;

  ${media.tablet`
    flex-wrap: no-wrap;
  `}
`;
