import React, { useState, useEffect } from 'react';
import Section from '../Common/Section'
import FlashSalesSlider from '../Slider/FlashSalesSlider';
import Button from '../Common/Button';
import { Link } from "react-router-dom";

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ label, value }) => (
    <div className="flex flex-col items-center">
      <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 md:mt-2">{label}</p>
      <div className="text-black font-bold rounded px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-sm sm:text-base md:text-3xl lg:text-4xl">
        {String(value).padStart(2, '0')}
      </div>
    </div>
  );

  return (
    <>
      <div className="pt-36">
        <div className="container">
          <Section section="Today's" />

          <div className="flex flex-col sm:flex-row items-center md:gap-24 sm:gap-6">
            {/* Title */}
            <h2 className="text-2xl mt-7 sm:text-3xl md:text-4xl font-bold text-gray-900 relative">
              Flash Sales
            </h2>

            {/* Timer */}
            <div className="flex items-center gap-1 sm:gap-3 md:gap-0 relative justify-center">
              <TimeBox label="Days" value={timeLeft.days} />
              <span className="hidden md:block text-lg sm:text-2xl md:text-4xl font-bold text-red-400 px-0.5 sm:px-1 md:absolute md:left-17 md:top-9">:</span>
              <TimeBox label="Hours" value={timeLeft.hours} />
              <span className="hidden md:block text-lg sm:text-2xl md:text-4xl font-bold text-red-400 px-0.5 sm:px-1 md:absolute md:left-35 md:top-9">:</span>
              <TimeBox label="Minutes" value={timeLeft.minutes} />
              <span className="hidden md:block text-lg sm:text-2xl md:text-4xl font-bold text-red-400 px-0.5 sm:px-1 md:absolute md:left-53 md:top-9">:</span>
              <TimeBox label="Seconds" value={timeLeft.seconds} />
            </div>
          </div>

          <FlashSalesSlider />

          <div className="flex justify-center pt-20 pb-16">

<Link to="/Products">

            <Button 
            text="View All Products"
            />

</Link>


          </div>

          <div className=' border border-gray-300 w-full'></div>

        </div>
      </div>
    </>
  );
};

export default FlashSales;
