import React from "react";

type ButtonProp = {
  text: string;
  onClick?: () => void;
  className?: string
};

const Button = (props: ButtonProp) => {
  return (
    <button
      className={`bg-transparent text-white border-2 border-white py-2 px-3 ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
