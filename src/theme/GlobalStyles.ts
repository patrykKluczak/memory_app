import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overscroll-behavior-y: none;
    -webkit-font-smoothing: antialiased;
  }
  h2,h3,h4,h5,h6 {
    margin: 0;
    line-height: 1;
  }
  p {
    margin:0;
    line-height: 1;
  }
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  *:focus {
    outline: 0;
  }
`;
