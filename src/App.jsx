import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import Banner from './Components/Banner/Banner'
import FlashSales from './Components/Flash-Sales/FlashSales'
import Categories from './Components/categoriesSec/Categories'
import BestSellingProducts from './Components/This-Month/BestSellingProducts'
import OfferBanner from './Components/discountBanner/OfferBanner'
import ExploreOurProducts from './Components/OurProducts/ExploreOurProducts'
import NewArrival from './Components/Featured/NewArrival'
import SupportDetails from './Components/Supports/SupportDetails'
import Footer from './Components/footer/Footer'

function App() {

  return (
    <>
    <Banner />
    <FlashSales />
    <Categories />
    <BestSellingProducts />
    <OfferBanner />
    <ExploreOurProducts />
    <NewArrival/>
    <SupportDetails/>
    </>
  )
}

export default App
