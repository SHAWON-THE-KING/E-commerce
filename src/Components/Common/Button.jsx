import React from "react";

function Button({ text, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-12 py-4 text-sm
        sm:px-4 sm:py-2 sm:text-base
        md:px-12 md:py-2.5 md:text-lg
        rounded-md font-medium bg-orange-500 text-white
        hover:bg-orange-600 transition-colors hover:scale-105 duration-300 ease-in-out
        ${className}
      `}
    >
      {text}
    </button>
  );
}

export default Button;
