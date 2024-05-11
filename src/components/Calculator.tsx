import { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [pendingOperation, setPendingOperation] = useState(null);
  const [pendingValue, setPendingValue] = useState(null);
  const [completeOperation, setCompleteOperation] = useState("");

  const keypadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operations = ["+", "-", "*", "/"];

  const handleClick = (value: string) => {
    setCurrentValue(prevValue => {
      if (prevValue === "0") {
        return value;
      } else {
        return prevValue + value;
      }
    });
    setCompleteOperation(prevOperation => prevOperation + value);
  };

  const handleOperation = operation => {
    setCompleteOperation(currentValue + " " + operation);
    setPendingOperation(operation);
    setCurrentValue(currentValue);
    setCurrentValue("");
  };

  const hadleClear = () => {
    setCurrentValue("0");
    setPendingOperation(null);
    setPendingValue(null);
    setCompleteOperation("");
  };

  return (
    <div className="calculator">
      <div className="complete-operation">{completeOperation}</div>
      <div className="display">{currentValue}</div>
      <div className="buttons">
        <button onClick={hadleClear}>AC</button>
        {keypadNumbers.map(num => {
          return (
            <button key={num} onClick={() => handleClick(num)}>
              {num}
            </button>
          );
        })}
        {operations.map(operation => {
          return (
            <button key={operation} onClick={() => handleOperation(operation)}>
              {operation}
            </button>
          );
        })}
        <button>=</button>
      </div>
    </div>
  );
};

export default Calculator;
