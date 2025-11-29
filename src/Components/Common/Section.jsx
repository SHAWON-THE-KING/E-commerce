import React from "react";

const Section = ({ section }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 justify-center sm:justify-start">
        {/* left bar: mobile-first small, scales up on sm/md */}
        <div className="h-5 w-2 sm:h-7 sm:w-3 md:h-9 md:w-4 bg-orange-600 rounded-sm" />

        {/* label: mobile-first text size, scales up */}
        <h1 className="text-sm sm:text-base md:text-lg text-orange-600 font-semibold">
          {section}
        </h1>
      </div>
    </div>
  );
};

export default Section;