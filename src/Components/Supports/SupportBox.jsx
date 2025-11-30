import React from "react";

const SupportBox = ({ src, h1, p }) => {
  return (
    <>
      <div className="w-62 h-40 gap-6 flex flex-col justify-center items-center">
        <img src={src} alt="" />
        <div className=" flex flex-col justify-center items-center gap-2">
          <h1 className="text-xl font-semibold">{h1}</h1>
          <p className="text-sm">{p}</p>
        </div>
      </div>
    </>
  );
};

export default SupportBox;
