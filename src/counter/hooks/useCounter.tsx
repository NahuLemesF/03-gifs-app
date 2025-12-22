import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleSubtract = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    // Values
    counter,

    // Methods / Actions
    handleAdd,
    handleSubtract,
    handleReset
  }
};
