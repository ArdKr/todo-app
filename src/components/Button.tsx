import React from "react";

interface ButtonProps {
  buttonText: string;
  onButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  bgColor?: string;
  transparent?: boolean;
}

const Button = ({
  buttonText,
  onButtonClick,
  bgColor = "gray",
  transparent = true,
}: ButtonProps) => {
  return (
    <>
      <button
        onClick={onButtonClick}
        className={
          "transition py-1 px-2 rounded-md text-xl font-bold text-" +
          bgColor +
          "-700 hover:bg-gray-200 focus:outline-none" +
          (!transparent && " bg-" + bgColor + "-50")
        }
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
