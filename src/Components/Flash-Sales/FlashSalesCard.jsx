import React from 'react'
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

const FlashSalesCard = ({
    productImage,
    discountPercentage,
    dishidden,
    productName,
    discountedPrice,
    originalPrice,
    addToCart,
    solds
}) => {
    return (
        <>
        <div>
            <div className='w-[270px] h-[250px] bg-pink-100 items-center justify-center flex mt-20 relative rounded-lg group hover:transition-all duration-300 ease-in-out cursor-pointer'>

                {/* product image */}
                <img src={productImage} alt={productName} />

                {/* icons */}
                <div className=' absolute top-5 right-3'>
                    <div className='h-8 w-8 bg-white flex items-center justify-center rounded-full hover:scale-110 duration-300'>
                        <GoHeart className='hover:text-red-500' />
                    </div>

                    <div className='h-8 w-8 bg-white flex items-center justify-center rounded-full mt-2 hover:scale-110 duration-300'>
                        <IoEyeOutline className='hover:text-red-500' />
                    </div>
                </div>

                {/* discount badge */}
                <div className={`${dishidden} py-1 px-3 bg-orange-500 rounded-[5px] text-center absolute top-5 left-3 hover:scale-110 duration-300`}>
                    <p className="text-white">
                        {discountPercentage}% OFF
                    </p>
                </div>

                {/* Add To Cart */}
                <div className='h-10 w-full bg-black text-white text-center pt-2 absolute bottom-0 rounded-b-lg opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                    <h2>{addToCart}</h2>
                </div>
            </div>

            {/* Details */}
            <div>
                <h2 className='font-medium pt-3'>{productName}</h2>
                <div className='flex gap-3 font-medium text-center items-center'>
                    <h2 className='text-orange-600 text-[22px]'>{discountedPrice}</h2>
                    <h2 className='text-gray-500 line-through'>{originalPrice}</h2>
                </div>

                <div className='flex gap-3'>
                    <div className='flex gap-3 font-medium pt-1'>
                        <IoStar className='text-yellow-500' />
                        <IoStar className='text-yellow-500' />
                        <IoStar className='text-yellow-500' />
                        <IoStar className='text-yellow-500' />
                        <IoStar className='text-gray-300' />
                    </div>

                    <p className=' text-gray-500'>{solds}</p>
                </div>
            </div>
        </div>

        <div>
        </div>
        </>
    )
}

export default FlashSalesCard
