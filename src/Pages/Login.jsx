import React from "react";
import SideImg from "../assets/SidePhone.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="flex flex-col md:flex md:flex-row items-center gap-35 py-15">
                    <div className="">
                        <img src={SideImg} alt="Photo" />
                    </div>
                    <div className="">
                        <div className="w-[371px] ">
                            <div className="flex flex-col gap-5">
                                <h1 className="font-medium text-4xl leading-7.5 tracking-[4%]">
                                    Log in to Exclusive
                                </h1>
                                <p className="leading-6">Enter your details below</p>
                            </div>

                            <div className="flex flex-col gap-10 my-8">
                                <input
                                    className="outline-none border-b border-gray-400 "
                                    type="email"
                                    placeholder="Email or Phone Number"
                                />
                                <input
                                    className="outline-none border-b border-gray-400 "
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="flex flex-row justify-between">
                                <button className=" px-12 py-4 text-white bg-[#DB4444] rounded-md cursor-pointer hover:scale-105 transition-all duration-300 ">
                                    Log in
                                </button>
                                <div className="flex items-center gap-2  rounded-md  px-4 py-3 justify-center cursor-pointer">
                                    <button className="hover:underline hover:underline-offset-5 cursor-pointer">
                                        {" "}
                                        Forget Password?
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
