import React from "react";
import SideImg from "../assets/SidePhone.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
    <div className="container">
      <div className="flex flex-col md:flex md:flex-row items-center gap-35 py-15">
        <div>
          <img src={SideImg} alt="" />
        </div>
        <div>
            <div className="w-[371px] ">
          <div className="flex flex-col gap-5">
            <h1 className="font-medium text-4xl leading-7.5 tracking-[4%]">Create an account</h1>
            <p className="leading-6">Enter your details below</p>
          </div>

          <div className="flex flex-col gap-10 my-8">
            <input className="outline-none border-b border-gray-400 " type="text" placeholder="Name" />
            <input className="outline-none border-b border-gray-400 " type="email" placeholder="Email or Phone Number" />
            <input className="outline-none border-b border-gray-400 " type="password" placeholder="Password" />
          </div>

          <div className="flex flex-col gap-8">
            <button className="w-full px-[122px] py-[16px] text-white bg-[#DB4444] rounded-md cursor-pointer  hover:scale-105 transition-all duration-300">Create Account</button>
            <div className="flex items-center gap-2 border border-gray-300 rounded-md  px-4 py-3 justify-center cursor-pointer hover:scale-105 transition-all duration-300">
              <FcGoogle />
              <button className="cursor-pointer "> Sign up with Google</button>
            </div>
          </div>

          <div className="flex gap-2 items-center justify-center mt-6 group">
            <p>Already have account?</p>
            <Link className="group-hover:underline group-hover:underline-offset-4" to="/Login">Log in </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default SignUp;
