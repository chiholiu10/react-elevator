import React, { FC, useEffect, useState } from "react";
import { BuildingFloor, ElevatorButton } from "./App.styles";
import { Buttons, SortOrders } from "./SortOrder";

export const App: FC = () => {
  const [orders, setOrders] = useState<number[]>([]);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");

  const clickButton = (currentNumber: number) => {
    if (orders.includes(currentNumber)) {
      return;
    }
    if (currentFloor === currentNumber) {
      return;
    }
    setOrders((currentOrders) =>
      SortOrders([...currentOrders, currentNumber], direction, currentFloor)
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFloor((floor) => floor + (direction === "up" ? 1 : -1));
    }, 3000);

    if(orders.length === 0) clearInterval(interval);
    return () => clearInterval(interval);

  }, [direction, orders]);

  useEffect(() => {

    setDirection((d) =>
      currentFloor < Math.max(...orders) ? "up" : currentFloor > Math.max(...orders) ? "down" : d
    );
  }, [currentFloor, orders]);

  useEffect(() => {
    setOrders((currentOrders) => {
      const nextOrders = [...currentOrders];
      const indexToDelete = nextOrders.indexOf(currentFloor);
      if (indexToDelete > -1) {
        nextOrders.splice(indexToDelete, 1);

        return SortOrders(nextOrders, direction, currentFloor);
      }
      return currentOrders;
    });
  }, [currentFloor, direction]);

  return (
    <div>
        {Buttons.reverse().map((button, index) => (
          <ElevatorButton key={index} disabled={currentFloor === index} onClick={() => clickButton(index)} clicked={orders.indexOf(button) > -1}>{button}</ElevatorButton>
        ))}

        {Buttons.map((floor, index) => {
          return (
            <BuildingFloor key={index} floorActive={index === currentFloor} >{floor}</BuildingFloor>
          )
        })}
    </div>
  );
}
