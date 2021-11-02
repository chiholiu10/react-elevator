import styled from "styled-components";

export const ElevatorButton = styled.button<{clicked: boolean}>`
  border: ${props => props.clicked ? "1px solid red" : "1px solid transparent"};
  height: 20px;
  width: 20px; 
`;

export const BuildingFloor = styled.div<{floorActive: boolean}>`
  border: ${props => props.floorActive ? "1px solid red" : "1px solid transparent"};
  height: 20px;
  width: 20px; 
`;