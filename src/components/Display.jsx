import React from "react";

const Display = ({ expression, result }) => {
  return (
    <div className="bg-[rgb(69,69,67)] h-24 w-full rounded-t-xl text-white">
      <div className="text-right text-3xl font-bold ">{expression}</div>
      <div className="text-right text-2xl">{result}</div>
    </div>
  );
};

export default Display;
