import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(10);
  const increaseBy = (value: number) => {
    setCount((current) => Math.max(current + value, 0));
    // setCount((current) => current + value);
  };
  return {
    //properties
    count,
    //actions
    increaseBy,
  };
};
