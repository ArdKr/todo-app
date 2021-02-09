import React from "react";

interface ButtonProps {
  buttonText: string;
  onButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const Button = ({ buttonText, onButtonClick }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onButtonClick}
        className="transition h-8 w-8 rounded-md text-xl font-bold text-gray-700  hover:bg-gray-200 focus:outline-none"
      >
        +
      </button>
    </>
  );
};

export default Button;
