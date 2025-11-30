import React from "react";


const AbCard = ({Photo,h1,p}) => {
  return (
    <>
      <div className=" w-[270px] border-2 border-gray-200 rounded-lg">
        <div className="flex flex-col gap-3 text-center items-center justify-center py-[30px] hover:bg-[#DB4444] hover:text-white transition-all duration-300 hover:rounded-lg">
          <img className="w-20 h-20" src={Photo} alt="" />
          <h1 className="font-bold text-4xl leading-7.5 tracking-[4%]">
            {h1}
          </h1>
          <p>{p}</p>
        </div>
      </div>
    </>
  );
};

export default AbCard;
