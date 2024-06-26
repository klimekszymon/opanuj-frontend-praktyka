import React, { useState } from 'react';
import { operations } from './mathOperations';

// Enhanced button component for visual feedback and accessibility
const OperationButton = ({ operation, onExecute }) => (
  <button
    aria-label={`Calculate ${operation.name}`}
    key={operation.name}
    className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform active:scale-95"
    onClick={() => onExecute(operation.function)}
    style={{ cursor: 'pointer' }}
  >
    {operation.symbol}
  </button>
);

const CalculatorApp = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const handleOperation = (
    operation: (num1: number, num2: number) => number
  ) => {
    setResult(operation(firstNumber, secondNumber));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstNumber}
          onChange={(e) => setFirstNumber(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondNumber}
          onChange={(e) => setSecondNumber(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        {operations.map((operation) => (
          <OperationButton
            key={operation.name}
            operation={operation}
            onExecute={handleOperation}
          />
        ))}
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default CalculatorApp;
