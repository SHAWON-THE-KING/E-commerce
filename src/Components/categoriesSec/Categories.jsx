import React from "react";
import Section from "../Common/Section";
import CategoriesSlider from "./CategoriesSlider";

const Categories = () => {
    return (
        <>
            <div className="container pt-20">
                <Section section="Categories" />

                <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 md:gap-24">
                    <h2 className="text-xl mt-4 sm:mt-7 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        Browse By Category
                    </h2>
                </div>

                <div className="mt-6">
                    <CategoriesSlider />
                </div>

                <div className="h-px bg-gray-200 w-full mt-8 "></div>

            </div>
        </>
    );
};

export default Categories;