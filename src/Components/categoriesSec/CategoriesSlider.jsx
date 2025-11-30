import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import {
    FiSmartphone,
    FiMonitor,
    FiWatch,
    FiCamera,
    FiHeadphones
} from "react-icons/fi";
import { PiGameControllerThin } from "react-icons/pi";
import CategoryCard from "./CategoryCard";

function CategoriesSlider() {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280, // xl & above
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024, // lg
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, // md
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // sm (phones)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0px"
                }
            }
        ]
    };

    const ArrowButton = ({ direction, onClick }) => (
        <button
            onClick={onClick}
            className="
                h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 
                rounded-full bg-white border border-gray-300 
                flex items-center justify-center 
                hover:bg-gray-100 transition-all duration-150
                shadow-sm hover:shadow-md cursor-pointer
            "
        >
            {direction === "left" ? (
                <FaArrowLeftLong className="text-black text-base sm:text-lg md:text-xl" />
            ) : (
                <FaArrowRightLong className="text-black text-base sm:text-lg md:text-xl" />
            )}
        </button>
    );

    return (
        <div className="relative my-10 sm:my-14 md:my-16 lg:my-20 container mx-auto px-4">
            {/* Arrow Buttons */}
            <div className="
                        absolute 
                        top-3 right-1
                        sm:top-0 sm:right-4 
                        md:-top-25 md:right-10 
                        flex gap-2 items-center z-10
                        hidden lg:flex
                    ">
                <ArrowButton direction="left" onClick={() => sliderRef.current?.slickPrev()} />
                <ArrowButton direction="right" onClick={() => sliderRef.current?.slickNext()} />
            </div>

            {/* Mobile & Tablet Arrows (mid-bottom) */}
            <div
                className="
                    absolute 
                    -bottom-15 left-1/2 
                    -translate-x-1/2
                    flex gap-3 items-center z-10
                    lg:hidden
                "
            >
                <ArrowButton direction="left" onClick={() => sliderRef.current?.slickPrev()} />
                <ArrowButton direction="right" onClick={() => sliderRef.current?.slickNext()} />
            </div>




            {/* Slider */}
            <div className="slider-container categories-slider">
                <Slider ref={sliderRef} {...settings}>
                    {[
                        { icon: <FiSmartphone size={32} />, label: "Phones" },
                        { icon: <FiMonitor size={32} />, label: "Computers" },
                        { icon: <FiWatch size={32} />, label: "SmartWatch" },
                        { icon: <FiCamera size={32} />, label: "Camera" },
                        { icon: <FiHeadphones size={32} />, label: "HeadPhones" },
                        { icon: <PiGameControllerThin size={32} />, label: "Gaming" },
                        // Duplicate for loop effect
                        { icon: <FiSmartphone size={32} />, label: "Phones" },
                        { icon: <FiMonitor size={32} />, label: "Computers" },
                        { icon: <FiWatch size={32} />, label: "SmartWatch" },
                        { icon: <FiCamera size={32} />, label: "Camera" },
                        { icon: <FiHeadphones size={32} />, label: "HeadPhones" },
                        { icon: <PiGameControllerThin size={32} />, label: "Gaming" }
                    ].map((item, index) => (
                        <div key={index} className="px-2 flex justify-center">
                            <div className="w-full max-w-[160px] sm:max-w-xs md:max-w-sm lg:max-w-md">
                                <CategoryCard icon={item.icon} label={item.label} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style>{`
  .categories-slider .slick-slide {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
`}</style>

        </div>
    );
}

export default CategoriesSlider;
