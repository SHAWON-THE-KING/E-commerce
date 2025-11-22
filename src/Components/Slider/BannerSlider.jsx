import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../assets/banner.png";
import { FaArrowRightLong } from "react-icons/fa6";

function BannerSlider() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    pauseOnHover: true,
    arrows: false,
  };

  // Reusable Slide Component
  const Slide = () => (
    <div className="relative w-full ">
      {/* Banner Image */}
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full border-none"
      />

      {/* Overlay Shop Now */}
      <a
        href="#"
        className="flex gap-3 underline underline-offset-8 items-center 
                   text-white text-sm md:text-xl absolute left-[8%] top-[75%] 
                   hover:text-red-200 duration-300"
      >
        <span>Shop Now</span>
        <FaArrowRightLong className=" md:text-2xl" />
      </a>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto my-8 px-2">
      <Slider {...settings}>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </Slider>

      <style>{`
        .slick-dots li button:before {
          color: #FFFFFF;
          font-size: 15px;
          opacity: 0.6;
        }
        .slick-dots li.slick-active button:before {
          color: #e94560;
          border-radius: 50%;
          border: 2px solid #FFFFFF;
          opacity: 1;
        }
        .slick-dots {
          bottom: 25px;
        }

        @media (max-width: 768px) {
          .slick-dots {
            bottom: 0px;
          }
          .slick-dots li button:before {
            font-size: 10px;
          }

          .slick-dots li.slick-active button:before {
          border: none;
        }
        @media (max-width: 1024px) {
          .slick-dots {
            bottom: 0px;
          }
          .slick-dots li button:before {
            font-size: 10px;
          }

          .slick-dots li.slick-active button:before {
          border: none;
        }
        }
      `}</style>
    </div>
  );
}

export default BannerSlider;
