import { FC } from "react";
import { NoData } from "../Elevator/Elevator.styles";
import { ElevatorButton } from "./ElevatorButtons.styles";

interface ElevatorBtnProps {
  orders: Array<number>;
  floorNumbers: Array<number>;
  currentFloor: number;
  clickButton: Function;
}

export const ElevatorButtons: FC<ElevatorBtnProps> = ({ 
  orders, 
  floorNumbers, 
  currentFloor, 
  clickButton 
}) => {
  if(floorNumbers === undefined || floorNumbers.length === 0) return (
  <NoData>No Floor numbers found</NoData>)

  const allButtons = floorNumbers.map((button, index) => (
    <ElevatorButton 
      key={index} 
      disabled={currentFloor === index} 
      onClick={() => clickButton(index)} 
      clicked={orders.indexOf(button) > -1}>
        {button}
    </ElevatorButton>
  ))

  return (
    <>{allButtons}</>
  )
}