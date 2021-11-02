import styled from "styled-components";

export const BuildingFloor = styled.div<{floorActive: boolean}>`
  height: 20px;
  width: 20px; 
  flex-direction: column-reverse;
  transition: 1s;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.floorActive ? "green" : "black"};
  color: ${props => props.floorActive ? "yellow" : "white"};
`;

export const Building = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;