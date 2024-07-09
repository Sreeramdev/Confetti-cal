// src/components/ScientificButtons.js

import React from "react";
import Button from "./Button";

const ScientificButtons = ({ onClick }) => {
  return (
    <div className="grid grid-cols-6  gap-[3px] mt-[1px]">
      <Button onClick={() => onClick("(")}>(</Button>
      <Button onClick={() => onClick(")")}>)</Button>
      <Button onClick={() => onClick("mc")}>MC</Button>
      <Button onClick={() => onClick("m+")}>M+</Button>
      <Button onClick={() => onClick("m-")}>M-</Button>
      <Button onClick={() => onClick("mr")}>MR</Button>
      <Button onClick={() => onClick("2nd")}>2nd</Button>
      <Button onClick={() => onClick("x2")}>x²</Button>
      <Button onClick={() => onClick("x3")}>x³</Button>
      <Button onClick={() => onClick("xy(")}>xy</Button>
      <Button onClick={() => onClick("ex")}>ex</Button>
      <Button onClick={() => onClick("10x")}>10x</Button>
      <Button onClick={() => onClick("1/x")}>1/x</Button>
      <Button onClick={() => onClick("sqrt(")}>2√x</Button>
      <Button onClick={() => onClick("cbrt(")}>3√x</Button>
      <Button onClick={() => onClick("yrt(")}>y√x</Button>
      <Button onClick={() => onClick("ln(")}>ln</Button>
      <Button onClick={() => onClick("log10(")}>log₁₀</Button>
      <Button onClick={() => onClick("x!")}>x!</Button>
      <Button onClick={() => onClick("sin(")}>sin</Button>
      <Button onClick={() => onClick("cos(")}>cos</Button>
      <Button onClick={() => onClick("tan(")}>tan</Button>
      <Button onClick={() => onClick("e")}>e</Button>
      <Button onClick={() => onClick("EE")}>EE</Button>
      <Button onClick={() => onClick("Rad(")}>Rad</Button>
      <Button onClick={() => onClick("sinh(")}>sinh</Button>
      <Button onClick={() => onClick("cosh(")}>cosh</Button>
      <Button onClick={() => onClick("tanh(")}>tanh</Button>
      <Button onClick={() => onClick("π")}>π</Button>
      <Button onClick={() => onClick("Rand")}>Rand</Button>
    </div>
  );
};

export default ScientificButtons;
