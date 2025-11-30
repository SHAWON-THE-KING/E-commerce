import React from 'react'
import { Outlet } from "react-router";
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/footer/Footer';


const RootLayout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout