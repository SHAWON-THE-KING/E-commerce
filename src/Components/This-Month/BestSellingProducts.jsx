import React from 'react';
import Section from "../Common/Section";
import Button from '../Common/Button';
import FlashSalesCard from '../Flash-Sales/FlashSalesCard';
import coat from '../../assets/Gucci-coat.png';
import bag from '../../assets/bag.png';
import cooler from '../../assets/cooler.png';
import bookself from '../../assets/bookself.png';
import { Link } from "react-router-dom";


const BestSellingProducts = () => {
  const products = [
    { image: coat, name: "The north coat" },
    { image: bag, name: "Gucci duffle bag" },
    { image: cooler, name: "RGB liquid CPU Cooler" },
    { image: bookself, name: "Small BookSelf" },
  ];

  return (
    <>
      <div className="container py-20">
        <Section section="This Month" />

        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 md:gap-24">
          <h2 className="text-xl mt-4 sm:mt-7 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Best Selling Products
          </h2>

          <Link to="/Products">
          <Button text="View All" />
          </Link>
        </div>

        {/* Responsive + centered on small, 4 in a row on desktop */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            gap-4
            md:gap-6
            mt-6
          "
        >
          {products.map((p, i) => (
            <div
              key={i}
              className="flex justify-center items-center"
            >
              <FlashSalesCard
                productImage={p.image}
                discountPercentage={40}
                dishidden="hidden"
                productName={p.name}
                discountedPrice="$120"
                originalPrice="$160"
                addToCart="Add To Cart"
                solds="150 sold"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSellingProducts;
