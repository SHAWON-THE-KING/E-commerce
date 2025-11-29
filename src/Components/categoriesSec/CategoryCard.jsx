// CategoryCard.jsx
import React from "react";

function CategoryCard({ icon, label }) {
  return (
    <div
      className="group w-44 h-36 border border-gray-300 rounded-md
                 flex flex-col items-center justify-center
                 bg-white cursor-pointer transition
                 hover:shadow-md hover:border-black hover:bg-orange-400 hover:text-white"
    >
      {icon}
      <p className="mt-2 text-sm text-gray-800 group-hover:text-white">
        {label}
      </p>
    </div>
  );
}

export default CategoryCard;
