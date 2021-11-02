import styled from "styled-components";

export const ElevatorButton = styled.button<{clicked: boolean}>`
  height: 40px;
  width: 40px; 
  font-size: 16px;
  border: none;
  border: 1px solid black;
  margin: 5px;
  @media (hover: none) and (pointer: coarse) {
    &:hover {
      cursor: pointer;
    }
  }
  background: ${props => props.clicked ? "yellow" : "transparent"};
`;