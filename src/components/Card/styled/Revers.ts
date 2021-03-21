import styled from "styled-components";
import avers from "../../../images/reverse.png";

export default styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(${avers}) no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
