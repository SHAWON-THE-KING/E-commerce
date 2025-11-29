import React from "react";

const Section = ({ section }) => {
  return (
    <>
    <div className="container">
      <div className="flex items-center gap-3 sm:gap-4">
        {/* left bar */}
        <div className="h-8 w-3 sm:h-9 sm:w-4 md:h-10 md:w-5 bg-orange-600 rounded-[5px]" />

        {/* text */}
        <h1
          className="
            text-xs sm:text-sm md:text-base lg:text-lg
            text-orange-600 font-semibold
          "
        >
          {section}
        </h1>
      </div>
      </div>
    </>
  );
};

export default Section;
