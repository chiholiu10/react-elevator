import { FC } from "react";
import { NoData } from "../Elevator/Elevator.styles";
import { Building, BuildingFloor } from "./ElevatorFloor.styles";

interface ElevatorBtnProps {
  floorNumbers: Array<number>;
  currentFloor: number;
}

export const ElevatorFloor: FC<ElevatorBtnProps> = ({ floorNumbers, currentFloor }) => {
  if(floorNumbers === undefined || floorNumbers.length === 0) return (
    <NoData>No Floor numbers found</NoData>)

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