import styled from "styled-components";

export default styled.input`
  position: relative;
  -webkit-appearance: none;
  width: 90%;
  height: 15px;
  border-radius: 5px;
  background: #fff;
  outline: none;
  opacity: 0.9;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  margin: 16px auto 36px;

  &:before {
    display: block;
    font-weight: 700;
    font-size: 16px;
    content: "2";
    color: black;
    position: absolute;
    left: 0;
    top: 20px;
  }

  &:after {
    display: block;
    font-weight: 700;
    font-size: 16px;
    content: "5";
    color: black;
    position: absolute;
    right: 0;
    top: 20px;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.yellowLight};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.yellowLight};
    cursor: pointer;
  }
`;
