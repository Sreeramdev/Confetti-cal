import React from "react";

const Button = ({ children, onClick, bankai , yokoso }) => {
  const numberBgColor = "bg-[rgb(69,69,67)]";
  const operatorBgColor = "bg-[rgb(87,87,85)]";
  const arithmaticBgColor = "bg-orange-500";

  let bgColorClass = "";
  let widthClass = "w-24";
  if (bankai) {
    bgColorClass = arithmaticBgColor;
  } else if (
    children === "+" ||
    children === "-" ||
    children === "×" ||
    children === "÷" ||
    children === "=" ||
    children == "."
  ) {
    bgColorClass = operatorBgColor;
  } else if (!isNaN(children)) {
    bgColorClass = numberBgColor;
  } else {
    bgColorClass = "bg-[rgb(87,87,85)]";
  }




  return (
    <button
      className={`${bgColorClass} ${widthClass} text-white hover:bg-gray-600 focus:outline-none text-xl  h-20`}
      onClick={() => onClick(children)}
    >
      {children}
    </button>
  );
};

export default Button;
