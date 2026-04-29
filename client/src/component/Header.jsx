import React from "react";
import img8 from "../images/pizza.jpg"
const Header = () => {
  return (
    <div className="pl-20 pr-20 py-3">
      <div className="bg-gradient-to-r from-blue-300 to-orange-300 rounded-2xl  flex items-center justify-center gap-50 overflow-hidden relative">

        {/* Left Content */}
        <div className="text-white z-10 pl-20">
          <p className="text-sm font-medium bg-white/20 inline-block px-3 py-1 rounded-full mb-4">
            ⚡ 12-min delivery
          </p>
          <h1 className="text-4xl font-bold mb-3 leading-tight">
            Fresh food, <br /> delivered fast.
          </h1>
          <p className="text-white/80 text-sm mb-6 max-w-sm">
            Order from your favourite restaurants and get hot meals at your doorstep.
          </p>
          <div className="flex gap-3">
            <button className="bg-white text-orange-500 font-bold px-6 py-2.5 rounded-xl hover:bg-orange-50 transition-colors text-sm">
              Order Now
            </button>
            <button className="border border-white/40 text-white px-6 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-sm">
              Browse Menu
            </button>
          </div>
        </div>

        {/* Right Image */}
        <img
          src={img8}
          alt="Food banner"
          className="hidden md:block   w-160  rounded-xl "
        />

      </div>
    </div>
  );
};

export default Header;
