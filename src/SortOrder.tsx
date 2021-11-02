export const SortOrders = (
  orders: number[],
  direction: "up" | "down",
  currentFloor: number
)  => {
  return [...orders].sort((orderA, orderB) => {
    if (
      direction === "up"
        ? orderA > currentFloor && orderB > currentFloor
        : !(orderA < currentFloor && orderB < currentFloor)
    ) {
      return orderA - orderB;
    } else {
      return orderB - orderA;
    }
  });
}

export const Buttons = [0, 1, 2, 3, 4, 5];