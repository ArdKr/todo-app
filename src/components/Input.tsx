import React from "react";

interface InputProps {
  itemText: string;
  onInputUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input = ({ itemText, onInputUpdate, placeholder }: InputProps) => {
  return (
    <div className="input w-full ">
      <input
        type="text"
        className="w-full border p-2 pl-4 focus:outline-none rounded-md"
        placeholder={placeholder}
        onChange={onInputUpdate}
        value={itemText}
      />
    </div>
  );
};

export default Input;
