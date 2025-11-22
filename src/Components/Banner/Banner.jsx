import React, { useState } from 'react'
import AllDropdown from './AllDropdown'
import BannerSlider from '../Slider/BannerSlider'

const Banner = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <div>
                <div className="container">
                    {/* Desktop Layout */}
                    <div className='hidden lg:flex justify-between gap-6'>
                        {/* Left Dropdowns */}
                        <div className='flex gap-6 pt-10'>
                            <div className='flex flex-col'>
                                <AllDropdown
                                    button="Woman's Fashion"
                                    item01="Dresses"
                                    item02="Tops & Shirts"
                                    item03="Pants & Jeans"
                                    item04="Skirts"
                                    item05="Jackets"
                                    item06="Accessories"
                                    viewAll="View all categories"
                                />
                                <AllDropdown
                                    button="Men's Fashion"
                                    item01="Shirts"
                                    item02="Pants"
                                    item03="Jackets"
                                    item04="Shoes"
                                    item05="Accessories"
                                    item06="Activewear"
                                    viewAll="View all categories"
                                />
                                <AllDropdown
                                    button="Electronics"
                                    item01="Smartphones"
                                    item02="Laptops & Computers"
                                    item03="Headphones & Audio"
                                    item04="Tablets & E-readers"
                                    item05="Smartwatches"
                                    item06="Gaming Consoles"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                                <AllDropdown
                                    button="Home & Lifestyle"
                                    item01="Furniture"
                                    item02="Bedding & Pillows"
                                    item03="Kitchen Appliances"
                                    item04="Home Décor"
                                    item05="Lighting"
                                    item06="Rugs & Carpets"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                                <AllDropdown
                                    button="Medicine"
                                    item01="Over-the-Counter Drugs"
                                    item02="Vitamins & Supplements"
                                    item03="First Aid Kits"
                                    item04="Pain Relief"
                                    item05="Cold & Flu Relief"
                                    item06="Digestive Health"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                                <AllDropdown
                                    button="Sports & Outdoor"
                                    item01="Running Shoes"
                                    item02="Yoga & Fitness Mats"
                                    item03="Camping Gear"
                                    item04="Hiking Equipment"
                                    item05="Outdoor Clothing"
                                    item06="Sports Accessories"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                                <AllDropdown
                                    button="Baby's & Toys"
                                    item01="Baby Strollers"
                                    item02="Toys & Games"
                                    item03="Baby Clothing"
                                    item04="Diapers & Wipes"
                                    item05="Feeding Bottles"
                                    item06="Baby Furniture"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                                <AllDropdown
                                    button="Groceries & Pets"
                                    item01="Fresh Produce"
                                    item02="Pet Food & Treats"
                                    item03="Snacks & Beverages"
                                    item04="Household Essentials"
                                    item05="Pet Toys & Accessories"
                                    item06="Canned & Packaged Foods"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                                <AllDropdown
                                    button="Health & Beauty"
                                    item01="Skincare Products"
                                    item02="Hair Care"
                                    item03="Makeup & Cosmetics"
                                    item04="Fragrances"
                                    item05="Personal Care"
                                    item06="Beauty Tools & Accessories"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                            </div>

                            {/* Vertical Divider */}
                        </div>
                            <div className='h-[560px] border border-gray-300'></div>

                        {/* Right Slider */}
                        <div className='pt-10 flex-1'>
                            <BannerSlider />
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className='lg:hidden p-4'>
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className='w-full bg-blue-600 text-white py-2 px-4 rounded font-semibold mb-4'
                        >
                            {mobileMenuOpen ? '✕ Close Categories' : '☰ View Categories'}
                        </button>

                        {/* Mobile Categories*/}
                        {mobileMenuOpen && (
                            <div className='flex flex-col gap-2 mb-4 max-h-96 overflow-y-auto'>
                                <AllDropdown
                                    button="Woman's Fashion"
                                    item01="Dresses"
                                    item02="Tops & Shirts"
                                    item03="Pants & Jeans"
                                    item04="Skirts"
                                    item05="Jackets"
                                    item06="Accessories"
                                    viewAll="View all categories"
                                    className="hidden"

                                />
                                <AllDropdown
                                    button="Men's Fashion"
                                    item01="Shirts"
                                    item02="Pants"
                                    item03="Jackets"
                                    item04="Shoes"
                                    item05="Accessories"
                                    item06="Activewear"
                                    viewAll="View all categories"
                                    className="hidden"

                                />
                                <AllDropdown
                                    button="Electronics"
                                    item01="Smartphones"
                                    item02="Laptops & Computers"
                                    item03="Headphones & Audio"
                                    item04="Tablets & E-readers"
                                    item05="Smartwatches"
                                    item06="Gaming Consoles"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                                <AllDropdown
                                    button="Home & Lifestyle"
                                    item01="Furniture"
                                    item02="Bedding & Pillows"
                                    item03="Kitchen Appliances"
                                    item04="Home Décor"
                                    item05="Lighting"
                                    item06="Rugs & Carpets"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                                <AllDropdown
                                    button="Medicine"
                                    item01="Over-the-Counter Drugs"
                                    item02="Vitamins & Supplements"
                                    item03="First Aid Kits"
                                    item04="Pain Relief"
                                    item05="Cold & Flu Relief"
                                    item06="Digestive Health"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                                <AllDropdown
                                    button="Sports & Outdoor"
                                    item01="Running Shoes"
                                    item02="Yoga & Fitness Mats"
                                    item03="Camping Gear"
                                    item04="Hiking Equipment"
                                    item05="Outdoor Clothing"
                                    item06="Sports Accessories"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                                <AllDropdown
                                    button="Baby's & Toys"
                                    item01="Baby Strollers"
                                    item02="Toys & Games"
                                    item03="Baby Clothing"
                                    item04="Diapers & Wipes"
                                    item05="Feeding Bottles"
                                    item06="Baby Furniture"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                                <AllDropdown
                                    button="Groceries & Pets"
                                    item01="Fresh Produce"
                                    item02="Pet Food & Treats"
                                    item03="Snacks & Beverages"
                                    item04="Household Essentials"
                                    item05="Pet Toys & Accessories"
                                    item06="Canned & Packaged Foods"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                                <AllDropdown
                                    button="Health & Beauty"
                                    item01="Skincare Products"
                                    item02="Hair Care"
                                    item03="Makeup & Cosmetics"
                                    item04="Fragrances"
                                    item05="Personal Care"
                                    item06="Beauty Tools & Accessories"
                                    viewAll="View all categories"
                                    className="hidden"
                                />
                            </div>
                        )}

                        {/* Mobile Slider */}
                        <BannerSlider />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
