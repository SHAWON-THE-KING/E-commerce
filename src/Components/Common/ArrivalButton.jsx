import React from "react";

const ArrivalButton = ({ p, h }) => {
  return (
    <>
      <div className="flex flex-col gap-3 p-6">
        <h1 className="text-3xl font-semibold text-white">{h}</h1>
        <p className="text-sm text-white">{p}</p>
        <div className="flex gap-2 group">
          <a
            className="font-medium text-white underline underline-offset-5"
            href="#"
          >
            Shop Now
          </a>
          <svg
            className="w-5 h-5 mt-1 text-white fill-current transition-all duration-300 ease-in-out group-hover:ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ArrivalButton;
