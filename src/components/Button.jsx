import React from "react";

const Button = (props) => {
  const { bgColor, size, color, text, borderRadius, icon, handleClick } = props;

  return (
    <button
      onClick={() => {
        handleClick;
      }}
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
