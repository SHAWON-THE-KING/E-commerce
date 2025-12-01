import React from 'react'
import Section from "../Common/Section";
import FlashSalesCard from '../Flash-Sales/FlashSalesCard';
import Button from '../Common/Button';
import dogfood from '../../assets/dogfood.png'
import Camera from '../../assets/Camera.png'
import Laptop from '../../assets/Laptop.png'
import curology from '../../assets/curology.png'
import { Link } from "react-router-dom";

const ExploreOurProducts = () => {
    return (
        <div>
            <div className="container pt-20">
                <Section section="Our Products" />

                <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 md:gap-24">
                    <h2 className="text-xl mt-4 sm:mt-7 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        Explore Our Products
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-6">

                    <div className="flex justify-center">
                        <FlashSalesCard
                            productImage={dogfood}
                            discountPercentage={40}
                            dishidden="hidden"
                            productName="Breed Dry Dog Food"
                            discountedPrice="$120"
                            originalPrice="$160"
                            addToCart="Add To Cart"
                            solds="150 sold"
                        />
                    </div>

                    <div className="flex justify-center">
                        <FlashSalesCard
                            productImage={Camera}
                            discountPercentage={40}
                            dishidden="hidden"
                            productName="CANON EOS DSLR Camera"
                            discountedPrice="$120"
                            originalPrice="$160"
                            addToCart="Add To Cart"
                            solds="150 sold"
                        />
                    </div>

                    <div className="flex justify-center">
                        <FlashSalesCard
                            productImage={Laptop}
                            discountPercentage={40}
                            dishidden="hidden"
                            productName="ASUS FHD Gaming Laptop"
                            discountedPrice="$120"
                            originalPrice="$160"
                            addToCart="Add To Cart"
                            solds="150 sold"
                        />
                    </div>

                    <div className="flex justify-center">
                        <FlashSalesCard
                            productImage={curology}
                            discountPercentage={40}
                            dishidden="hidden"
                            productName="Curology Product Set "
                            discountedPrice="$120"
                            originalPrice="$160"
                            addToCart="Add To Cart"
                            solds="150 sold"
                        />
                    </div>
                    <div className="flex justify-center">
                        <FlashSalesCard
                            productImage={dogfood}
                            discountPercentage={40}
                            productName="The north coat"
                            discountedPrice="$120"
                            originalPrice="$160"
                            addToCart="Add To Cart"
                            solds="150 sold"
                        />
                    </div>

                    <div className="flex justify-center">
                        <FlashSalesCard
                            productImage={dogfood}
                            discountPercentage={40}
                            dishidden="hidden"
                            productName="The north coat"
                            discountedPrice="$120"
                            originalPrice="$160"
                            addToCart="Add To Cart"
                            solds="150 sold"
                        />
                    </div>

                    <div className="flex justify-center">
                        <FlashSalesCard
                            productImage={dogfood}
                            discountPercentage={40}
                            productName="The north coat"
                            discountedPrice="$120"
                            originalPrice="$160"
                            addToCart="Add To Cart"
                            solds="150 sold"
                        />
                    </div>

                    <div className="flex justify-center">
                        <FlashSalesCard
                            productImage={dogfood}
                            discountPercentage={40}
                            dishidden="hidden"
                            productName="The north coat"
                            discountedPrice="$120"
                            originalPrice="$160"
                            addToCart="Add To Cart"
                            solds="150 sold"
                        />
                    </div>

                </div>

                <Link to="/Products">
                
                     <Button text="View All Products" className="mt-20 mx-auto block" />
                
                 </Link>

            </div>
        </div>
    )
}

export default ExploreOurProducts
