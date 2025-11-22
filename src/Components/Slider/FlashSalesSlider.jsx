import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import FlashSalesCard from '../Flash-Sales/FlashSalesCard';
import Controler from '../../assets/Controler.png'
import keybord from '../../assets/Keybord.png'
import Monitor from '../../assets/Monitor.png'
import Chair from '../../assets/Chair.png'

function FlashSalesSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px'
        }
      }
    ]
  };

  // Custom Arrow Button Component (inline)
  const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white border border-gray-300 
                 flex items-center justify-center hover:bg-gray-100 transition-all duration-100
                 shadow-sm hover:shadow-md cursor-pointer"
    >
      {direction === "left" ? (
        <FaArrowLeftLong className="text-black text-center text-lg md:text-xl" />
      ) : (
        <FaArrowRightLong className="text-black text-center text-lg md:text-xl" />
      )}
    </button>
  );

  return (
    <div className="relative w-full px-2 sm:px-4 flash-sales-slider-wrapper">
      <div className="absolute top-5 right-[38%] z-10 sm:-top-16 md:-top-16 sm:right-4 md:right-10">
        {/* Custom Arrow Buttons */}
        <div className="flex gap-2 items-center md:gap-3">
          <ArrowButton 
            direction="left"
            onClick={() => sliderRef.current?.slickPrev()} 
          />
          <ArrowButton 
            direction="right"
            onClick={() => sliderRef.current?.slickNext()} 
          />
        </div>
      </div>

      {/* Slider */}
      <div className="slider-container flex justify-center">
        <div className="w-full max-w-full">
          <Slider ref={sliderRef} {...settings}>
            {/* Product 1 */}
            <div className="px-2 flex justify-center">
              <div className="w-full max-w-xs">
                <FlashSalesCard
                  productImage={Controler}
                  discountPercentage={40}
                  productName="HAVIT HV-G92 Gamepad"
                  discountedPrice="$120"
                  originalPrice="$160"
                  addToCart="Add To Cart"
                  solds="150 sold"
                />
              </div>
            </div>

            {/* Product 2 */}
            <div className="px-2 flex justify-center">
              <div className="w-full max-w-xs">
                <FlashSalesCard
                  productImage={keybord}
                  discountPercentage={35}
                  productName="AK-900 Wired Keyboard"
                  discountedPrice="$960"
                  originalPrice="$1160"
                  addToCart="Add To Cart"
                  solds="85 sold"
                />
              </div>
            </div>

            {/* Product 3 */}
            <div className="px-2 flex justify-center">
              <div className="w-full max-w-xs">
                <FlashSalesCard
                  productImage={Monitor}
                  discountPercentage={30}
                  productName="IPS LCD Gaming Monitor"
                  discountedPrice="$370"
                  originalPrice="$400"
                  addToCart="Add To Cart"
                  solds="120 sold"
                />
              </div>
            </div>

            {/* Product 4 */}
            <div className="px-2 flex justify-center">
              <div className="w-full max-w-xs">
                <FlashSalesCard
                  productImage={Chair}
                  discountPercentage={25}
                  productName="S Series Comfort Chair"
                  discountedPrice="$375"
                  originalPrice="$400"
                  addToCart="Add To Cart"
                  solds="90 sold"
                />
              </div>
            </div>

            {/* Product 5 */}
            <div className="px-2 flex justify-center">
              <div className="w-full max-w-xs">
                <FlashSalesCard
                  productImage={Controler}
                  discountPercentage={40}
                  productName="HAVIT HV-G92 Gamepad"
                  discountedPrice="$120"
                  originalPrice="$160"
                  addToCart="Add To Cart"
                  solds="150 sold"
                />
              </div>
            </div>

            {/* Product 6 */}
            <div className="px-2 flex justify-center">
              <div className="w-full max-w-xs">
                <FlashSalesCard
                  productImage={keybord}
                  discountPercentage={35}
                  productName="AK-900 Wired Keyboard"
                  discountedPrice="$960"
                  originalPrice="$1160"
                  addToCart="Add To Cart"
                  solds="85 sold"
                />
              </div>
            </div>

            {/* Product 7 */}
            <div className="px-2 flex justify-center">
              <div className="w-full max-w-xs">
                <FlashSalesCard
                  productImage={Monitor}
                  discountPercentage={30}
                  productName="IPS LCD Gaming Monitor"
                  discountedPrice="$370"
                  originalPrice="$400"
                  addToCart="Add To Cart"
                  solds="120 sold"
                />
              </div>
            </div>

            {/* Product 8 */}
            <div className="px-2 flex justify-center">
              <div className="w-full max-w-xs">
                <FlashSalesCard
                  productImage={Chair}
                  discountPercentage={25}
                  productName="S Series Comfort Chair"
                  discountedPrice="$375"
                  originalPrice="$400"
                  addToCart="Add To Cart"
                  solds="90 sold"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <style>{`
        .flash-sales-slider-wrapper .slick-slide {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
      `}</style>
    </div>
  );
}

export default FlashSalesSlider;
