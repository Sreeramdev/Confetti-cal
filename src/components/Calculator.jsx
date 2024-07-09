import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import ScientificButtons from "./ScientificButtons";
import ConfettiExplosion from "react-confetti-explosion"; // Import confetti library

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression);
        setResult(evalResult);
        setExpression(evalResult.toString());
        checkForConfetti(evalResult);
      } catch (error) {
        setResult("Error");
        setExpression("");
      }
    } else if (value === "AC") {
      setExpression("");
      setResult("");
      setShowConfetti(false);
    } else if (value === "MC") {
      // Clear memory
      // Implement memory functionality as needed
    } else if (value === "M+") {
      // Add to memory
      // Implement memory functionality as needed
    } else if (value === "M-") {
      // Subtract from memory
      // Implement memory functionality as needed
    } else if (value === "MR") {
      // Recall memory
      // Implement memory functionality as needed
    } else {
      setExpression((prevExpression) => prevExpression + value);
      setShowConfetti(false);
    }
  };

  const checkForConfetti = (evalResult) => {
    if (expression.includes("2") && expression.includes("6")) {
      setShowConfetti(true);
    }
  };

  return (
    <div className="bg-black w-[67%] rounded-xl mt-20  m-auto">
      <div className="w-full m-auto  relative shadow-lg rounded-3xl">
        {showConfetti && <ConfettiExplosion />}
        {/* Render confetti if showConfetti is true */}
        <Display expression={expression} result={result} />
        <div className="flex gap-1 w-full">
          {/* Scientific Buttons */}
          <ScientificButtons onClick={handleButtonClick} />
          <div className="grid grid-cols-3  gap-1">
            {/* Basic Buttons */}
            <Button onClick={handleButtonClick}>AC</Button>
            <Button onClick={handleButtonClick}>+/-</Button>
            <Button onClick={handleButtonClick}>%</Button>

            <Button onClick={() => handleButtonClick("7")}>7</Button>
            <Button onClick={() => handleButtonClick("8")}>8</Button>
            <Button onClick={() => handleButtonClick("9")}>9</Button>

            <Button onClick={() => handleButtonClick("4")}>4</Button>
            <Button onClick={() => handleButtonClick("5")}>5</Button>
            <Button onClick={() => handleButtonClick("6")}>6</Button>

            <Button onClick={() => handleButtonClick("1")}>1</Button>
            <Button onClick={() => handleButtonClick("2")}>2</Button>
            <Button onClick={() => handleButtonClick("3")}>3</Button>

            <Button yokoso
              onClick={() => handleButtonClick("0")}
              className="col-span-2"
            >
              0
            </Button>
            <Button onClick={() => handleButtonClick(".")}>.</Button>
          </div>

          {/* Arithmetic Buttons with Orange Background */}
          <div className="grid grid-cols-1">
            <Button bankai onClick={() => handleButtonClick(" + ")}>
              +
            </Button>
            <Button bankai onClick={() => handleButtonClick(" - ")}>
              -
            </Button>
            <Button bankai onClick={() => handleButtonClick(" * ")}>
              ×
            </Button>
            <Button bankai onClick={() => handleButtonClick(" / ")}>
              ÷
            </Button>
            <Button bankai onClick={handleButtonClick}>
              =
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
