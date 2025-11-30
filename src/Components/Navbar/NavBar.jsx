import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { MdLocalMall } from "react-icons/md";
import { FaRegCircleXmark, FaRegHeart } from "react-icons/fa6";
import { IoStarOutline, IoCartOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router";
import { Link } from "react-router-dom";



const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* ---------------- FIRST NAVBAR ----------------- */}
      <nav className="bg-black py-2 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-center gap-2">

            <h2 className="text-sm mx-auto w-[300px]  md:ml-[1%] md:w-full md:text-base">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
              <span className="font-bold hover:underline  cursor-pointer pl-2 block md:inline">
                ShopNow
              </span>
            </h2>

            <form>
              <select
                className="px-3 py-2 bg-transparent text-white text-sm border-none outline-none"
                defaultValue="US"
              >
                <option className="text-black" value="US">United States</option>
                <option className="text-black" value="CA">Canada</option>
                <option className="text-black" value="FR">France</option>
                <option className="text-black" value="DE">Germany</option>
                <option className="text-black" value="BD">Bangladesh</option>
              </select>
            </form>

          </div>
        </div>
      </nav>

      {/* ---------------- SECOND NAVBAR ---------------- */}
      <nav className="py-4 px-4">
        <div className="container">

          <div className="flex justify-between items-center">

            {/* LOGO */}
            <img src={Logo} alt="Logo" className="w-28 md:w-32" />

            {/* NAV LINKS (Desktop Only) */}
            <div className="hidden lg:flex gap-10 text-lg font-medium">
              <NavLink to="/" className="hover:underline underline-offset-5 duration-200" end >Home</NavLink>
              <NavLink to="/contact" className="hover:underline underline-offset-5 duration-200" end >Contact</NavLink>
              <NavLink to="/about" className="hover:underline underline-offset-5 duration-200" end >About</NavLink>
              <NavLink to="/sign-up" className="hover:underline underline-offset-5 duration-200" end >Sign Up</NavLink>
            </div>

            {/* SEARCH (Hidden on mobile) */}
            <div className="hidden md:block">
              <form className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="search"
                    className="block w-[245px] p-3 bg-gray-100 border border-gray-300 text-sm rounded"
                    placeholder="What are you looking for?"
                  />

                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl">
                    <IoIosSearch />
                  </button>
                </div>
              </form>
            </div>

            {/* ICONS */}
            <div className="flex gap-4 items-center">

              <FaRegHeart className="text-2xl cursor-pointer" />
              <IoCartOutline className="text-2xl cursor-pointer" />

              {/* USER DROPDOWN */}
              <div className="relative">
                <button
                  className="text-2xl p-2 rounded-full  hover:bg-red-300"
                  onClick={() => setOpen(!open)}
                >
                  <CiUser className='font-bold'/>
                </button>

                {open && (
                  <div className="absolute right-0 z-50 bg-black/70 text-white backdrop-blur-xl rounded w-64 p-3 mt-2">

                    <div className="flex items-center p-2 bg-gray-800/30 rounded">
                      <CiUser className="text-3xl" />
                      <div className="ml-2">
                        <p className="font-medium">Bonnie Green</p>
                        <p className="text-sm text-gray-300">whoareyou.com</p>
                      </div>

                      <span className="ml-auto bg-gray-700/40 text-xs px-2 py-1 rounded">
                        PRO
                      </span>
                    </div>

                    <ul className="mt-3 space-y-1">
                      <Link to="/Error">
                        <li className="hover:bg-gray-700/40 p-2 rounded flex items-center cursor-pointer">
                          <CiUser className="text-xl mr-2" /> My Profile
                        </li>
                      </Link>
                      <Link to="/Error">
                      <li className="hover:bg-gray-700/40 p-2 rounded flex items-center cursor-pointer">
                        <MdLocalMall className="text-xl mr-2" /> My Orders
                      </li>
                      </Link>

                      <Link to="/Error">
                      <li className="hover:bg-gray-700/40 p-2 rounded flex items-center cursor-pointer">
                        <FaRegCircleXmark className="text-xl mr-2" /> My Cancellations
                      </li>
                      </Link>
                      <Link to="/Error">
                      <li className="hover:bg-gray-700/40 p-2 rounded flex items-center cursor-pointer">
                        <IoStarOutline className="text-xl mr-2" /> My Reviews
                      </li>
                      </Link>
                      <Link to="/Error">
                      <li className="hover:bg-gray-700/40 p-2 rounded flex items-center cursor-pointer text-red-400">
                        <BiLogOut className="text-xl mr-2" /> Logout
                      </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                className="lg:hidden text-3xl ml-2"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu ? <IoClose /> : <RxHamburgerMenu />}
              </button>

            </div>
          </div>

          {/* ---------------- MOBILE MENU ---------------- */}
          {mobileMenu && (
            <div className="lg:hidden mt-4 bg-gray-100 p-4 rounded shadow">

              {/* MOBILE NAV LINKS */}
              <div className="flex flex-col gap-3 font-medium text-lg">
                <NavLink to="/" className="hover:underline underline-offset-5 duration-200" end >Home</NavLink>
                <NavLink to="/contact" className="hover:underline underline-offset-5 duration-200" >Contact</NavLink>
                <NavLink to="/about" className="hover:underline underline-offset-5 duration-200" >About</NavLink>
                <NavLink to="/sign-up" className="hover:underline underline-offset-5 duration-200" >Sign Up</NavLink>
              </div>

              {/* MOBILE SEARCH */}
              <div className="mt-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-3 bg-white border rounded"
                  />
                  <IoIosSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl" />
                </div>
              </div>

            </div>
          )}

        </div>

      </nav>
        <div className="border mt-4 border-gray-300"></div>
    </>
  );
};

export default NavBar;
