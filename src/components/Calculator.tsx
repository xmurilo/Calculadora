import { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [pendingOperation, setPendingOperation] = useState(null);
  const [pendingValue, setPendingValue] = useState(null);
  const [completeOperation, setCompleteOperation] = useState("");

  const keypadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operations = ["+", "-", "*", "/"];



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
          return <button key={operation}>{operation}</button>;
        })}
        <button>=</button>
      </div>
    </div>
  );
};

export default Calculator;
