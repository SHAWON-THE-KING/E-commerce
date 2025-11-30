import React, { useState, useEffect } from "react";
import Offer from '../../assets/OfferBanner.png';

const OfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = { ...prevTime };

        if (newTime.seconds > 0) newTime.seconds--;
        else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) newTime.minutes--;
          else {
            newTime.minutes = 59;
            if (newTime.hours > 0) newTime.hours--;
            else {
              newTime.hours = 23;
              if (newTime.days > 0) newTime.days--;
              else clearInterval(timer);
            }
          }
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className=" container xl:w-full mx-auto p-4 sm:p-6 md:p-10">
      <div className="relative">
        <img
          className="w-full object-cover h-[400px] sm:h-[500px] md:h-full"
          src={Offer}
          alt="Music Experience"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-6 sm:px-10 md:px-16 gap-6 sm:gap-8">
          <span className="text-[#44db58] text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Categories
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Enhance Your
            <br />
            <span className="text-gray-200">Music Experience</span>
          </h1>

          <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center bg-white rounded-lg shadow-md p-2 sm:p-3"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <button className="mt-4 sm:mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-10 rounded-lg transition duration-300 transform hover:scale-105">
            Buy Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
