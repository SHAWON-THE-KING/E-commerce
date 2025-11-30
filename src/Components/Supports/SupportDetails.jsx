import React from "react";
import SupportBox from "./SupportBox";
import Services from "../../assets/Services.png";
import Services2 from "../../assets/Services2.png";
import Services3 from "../../assets/Services3.png";


const SupportDetails = () => {
  return (
    <>
      <div className="container xl: mx-auto p-5 mt-30 relative">
        <div className="flex xl:flex-row gap-22 md:flex flex-col md:gap-11 items-center justify-center">
          <SupportBox
            src={Services}
            h1={"FREE AND FAST DELIVERY"}
            p={"Free delivery for all orders over $140"}
          />
          <SupportBox
            src={Services2}
            h1={"24/7 CUSTOMER SERVICE"}
            p={"Friendly 24/7 customer support"}
          />
          <SupportBox
            src={Services3}
            h1={"MONEY BACK GUARANTEE"}
            p={"We reurn money within 30 days"}
          />
        </div>
        <div className="">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-12 h-12 p-2 absolute -bottom-12 right-12 bg-gray-300 rounded-full
               transition-transform duration-300 ease-in-out hover:-translate-y-3 border-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              fill="currentColor"
              className="w-full h-full text-gray-500"
            >
              <path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SupportDetails;
