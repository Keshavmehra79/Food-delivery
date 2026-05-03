import React, { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
    const cart=useSelector(state=>state.mycart.cart)
  const nav=useNavigate();

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">

      {/* Logo */}
        <img src={logo} alt="" className=" w-20" />

      {/* Delivery Info */}
      <div className="hidden md:flex items-center gap-2">
        <span className="text-orange-500">📍</span>
        <div>
          <p className="font-semibold text-sm text-gray-800">Delivery in 12 minutes</p>
          <p className="text-xs text-gray-400">Bhopal, India</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-4 py-2.5 rounded-xl w-[38%] gap-2 border border-gray-200">
        <FiSearch className="text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search for food, restaurants..."
          className="bg-transparent outline-none text-sm text-gray-700 w-full"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Login */}
        <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
          <FiUser className="text-lg" />
          <span className="hidden md:block">Login</span>
        </button>

        {/* Cart */}
        <button onClick={()=>{nav("/cart")}} className="relative flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-colors text-sm font-semibold">
          <FiShoppingCart className="text-lg" />
          <span className="hidden md:block">Cart</span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cart.length}
            </span>
          )}
        </button>

      </div>
    </div>
  );
};

export default Navbar;
