import { FC, useEffect, useState } from "react";
import { SortOrders } from "../SortOrder/SortOrder";
import { ElevatorButtons } from "../ElevatorButtons/ElevatorButtons";
import { ElevatorFloor } from "../ElevatorFloor/ElevatorFloor";

export const Elevator: FC = () => {
  const [orders, setOrders] = useState<number[]>([]);
  const [currentFloor, setCurrentFloor] = useState<number>(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const floorNumbers: Array<number> = [0, 1, 2, 3, 4, 5];

  const clickButton = (currentNumber: number) => {
    if (orders.includes(currentNumber)) return;
    if (currentFloor === currentNumber) return;

    setOrders((currentOrders) =>
      SortOrders([...currentOrders, currentNumber], direction, currentFloor)
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFloor((floor) => floor + (direction === "up" ? 1: -1));
    }, 3000);

    if(orders.length === 0) clearInterval(interval);
    return () => clearInterval(interval);

  }, [direction, orders]);

  useEffect(() => {
    setDirection((d) =>
      currentFloor  <  Math.max(...orders)  ? "up" : currentFloor > Math.max(...orders) ? "down" : d
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
    <>
      <ElevatorButtons 
        floorNumbers={floorNumbers}
        orders={orders}
        currentFloor={currentFloor}
        clickButton={clickButton}
      />
      <ElevatorFloor
        floorNumbers={floorNumbers}
        currentFloor={currentFloor}
      />
    </>
  );
}
