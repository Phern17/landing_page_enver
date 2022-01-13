import React from "react";

type ButtonProp = {
  text: string;
  onClick?: () => void;
};

const Button = (props: ButtonProp) => {
  return (
    <button
      className="bg-transparent text-white border-2 border-white w-28 h-11"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
