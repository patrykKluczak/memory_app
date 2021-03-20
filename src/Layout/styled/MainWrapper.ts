import styled from "styled-components";
import img from "../../images/background.jpg";

export default styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
  background: url(${img}) no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.75;
`;
