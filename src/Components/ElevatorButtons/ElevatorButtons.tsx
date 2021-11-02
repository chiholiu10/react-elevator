import { FC } from "react";
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