import styled from "styled-components";

export default styled.span<{ bold: boolean }>`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: ${(props) => (props.bold ? "700" : "400")};
`;
