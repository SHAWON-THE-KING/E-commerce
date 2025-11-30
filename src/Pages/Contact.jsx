import React from "react";
import { MdAddIcCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Button from "../Components/Common/Button";
const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="flex flex-col items-center md:flex gap-[30px] py-32 md:flex-row md:justify-center">

                    <div className=" p-5 md:p-6 rounded-[10px] shadow-2xl">
                        <div className="w-[270px] h-full flex flex-col justify-between">
                            <div className="">
                                <div className="flex items-center gap-3 text-2xl font-semibold mb-4">
                                    <div className="p-2.5 bg-red-500 rounded-full text-white">
                                        <MdAddIcCall />
                                    </div>
                                    <span>Call To Us</span>
                                </div>
                                <div className="flex flex-col  gap-4">
                                    <p>We are available 24/7, 7 days a week.</p>
                                    <p>Phone: +8801611112222</p>
                                </div>
                            </div>
                            <div className="border-t border-gray-300 my-12 flex flex-col  gap-4                ">
                                <div className="flex items-center gap-3 text-2xl font-semibold mb-4 mt-16">
                                    <div className="p-2.5 bg-red-500 rounded-full text-white">
                                        <AiOutlineMail />
                                    </div>
                                    <span>Write To US</span>
                                </div>
                                <p>Fill out our form and we will contact you within 24 hours.</p>
                                <p>Emails: customer@exclusive.com</p>
                                <p>Emails: support@exclusive.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end p-8 rounded-[10px] shadow-2xl">
                        <div className="w-full md:w-[737px] md:h-[430px]">

                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    className="w-full md:w-[245px] md:h-[50px] outline-none bg-[#F5F5F5] p-4"
                                    type="text"
                                    placeholder="Your Name *"
                                    required
                                />

                                <input
                                    className="w-full md:w-[245px] outline-none md:h-[50px] bg-[#F5F5F5] p-4"
                                    type="email"
                                    placeholder="Your Email *"
                                    required
                                />

                                <input
                                    className="w-full md:w-[245px] outline-none md:h-[50px] bg-[#F5F5F5] p-4"
                                    type="text"
                                    placeholder="Your Phone *"
                                    required
                                />
                            </div>

                            <div className="py-8">
                                <textarea
                                    className="w-full md:h-[207px] outline-none bg-[#F5F5F5] 
                   placeholder:text-start placeholder:text-gray-500 p-4 resize-none"
                                    placeholder="Your Message *"
                                />
                            </div>
                        </div>

                        <div>
                            <Button text="Send Message" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
