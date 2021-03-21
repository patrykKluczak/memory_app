import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../../utils/detection";

export default styled(Link)`
  margin: 0 6px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};

  ${media.tablet`
    font-size: 18px;
    margin: 0 10px;
  `}
`;
