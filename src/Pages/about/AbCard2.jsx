import React from "react";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";


const AbCard2 = ({Img,h1,p}) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="">
          <img src={Img} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-4xl leading-7.5 tracking-[4%] ">{h1}</h1>
          <p>{p}</p>
          <div className="flex gap-4 text-2xl cursor-pointer">
            <CiTwitter />
            <IoLogoInstagram />
            <TiSocialLinkedin />
          </div>
        </div>
      </div>
    </>
  );
};

export default AbCard2;
