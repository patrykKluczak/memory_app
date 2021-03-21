import styled from "styled-components";
import avers from "../../../images/koszulka1.png";

export default styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(${avers}) no-repeat;
  background-position: center;
  background-size: cover;

  backface-visibility: hidden;
`;
