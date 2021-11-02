import { FC } from "react";
import { Building, BuildingFloor } from "./ElevatorFloor.styles";

interface ElevatorBtnProps {
  floorNumbers: Array<number>;
  currentFloor: number;
}

export const ElevatorFloor: FC<ElevatorBtnProps> = ({ floorNumbers, currentFloor }) => {
  const floors = floorNumbers.map((floor: number, index: number) => (
    <BuildingFloor 
      key={index} 
      floorActive={index === currentFloor}>
        {floor}
    </BuildingFloor>
  ))
  
  return (
    <Building>
      {floors}
  </Building>
  )
}