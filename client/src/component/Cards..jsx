import axios from "axios";
import React, { useEffect, useState } from "react";
const Cards = () => {
  const [products,setProducts]=useState([]);

  const loaddata=async()=>{
    try {
      const response=await axios.get("http://localhost:9000/admin/getproduct")

      setProducts(response.data.products);      
      
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    loaddata();
  },[])

  

  return (
    <div className="px-8 py-4">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-gray-800">Popular Dishes</h2>
        <span className="text-orange-500 text-sm font-semibold cursor-pointer hover:underline">
          View all →
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((item) => (
          <div
            key={item.foodname}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Emoji Card Top */}
            <div className="h-40 flex items-center justify-center text-7xl relative">
              <img src={item.defaultImage} alt="" className="h-40"/>
              
            </div>

            {/* Card Body */}
            <div className="p-4">
              <h3 className="font-bold text-gray-800 text-base">{item.foodname}</h3>
              <p className="text-gray-400 text-xs mt-1 mb-3">{item.description}</p>

              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span>⭐ {item.category}</span>
                <span>•</span>
                <span>🕐 {item.status}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">₹{item.price}</span>
                <button  className="bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">Order now</button>
                  
                      <button className="bg-white hover:bg-orange-600 text-black text-sm border  font-semibold px-4 py-2 rounded-xl transition-colors">
                    + Add to cart
                    </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
