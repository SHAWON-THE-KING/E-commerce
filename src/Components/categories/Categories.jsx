import React from "react";
import Section from "../Common/Section";
import CategoriesSlider from "../categories/CategoriesSlider";

const Categories = () => {
    return (
        <>
            <div className="container pt-20">
                <Section section="Categories" />

                <div className="flex flex-col sm:flex-row items-center md:gap-24 sm:gap-6">
                    <h2 className="text-2xl mt-7 sm:text-3xl md:text-4xl font-bold text-gray-900 relative">
                        Browse By Category
                    </h2>
                </div>
                <div>
                    <CategoriesSlider />
                </div>

                
                <div className=' border border-gray-300 w-full'></div>

            </div>
        </>
    );
};

export default Categories;
