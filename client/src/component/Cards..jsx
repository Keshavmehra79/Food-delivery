import React, { useState } from "react";
// import burger from "../images/Burger.png"
// import pizza from "../images/Pizza.png"
// import roll from "../images/roll.png"
// import butterchiken from "../images/butter chiken.png"
// import noodles from "../images/noodle.png"
// import salad from "../images/salad.png"
const foodItems = [
  {
    name: "Margherita Pizza",
    desc: "Classic tomato, mozzarella & basil",
    price: "₹299",
    rating: "4.9",
    time: "22 min",
    tag: "Bestseller",
    emoji: "",
    bg: "bg-orange-50",
  },
  {
    name: "Smash Burger",
    desc: "Double patty, cheese & caramelized onions",
    price: "₹199",
    rating: "4.8",
    time: "18 min",
    tag: "Hot 🔥",
    emoji: "",
    bg: "bg-red-50",
  },
  {
    name: "Dragon Sushi Roll",
    desc: "Avocado, tempura shrimp & spicy mayo",
    price: "₹349",
    rating: "4.9",
    time: "30 min",
    tag: "New",
    emoji: "",
    bg: "bg-green-50",
  },
  {
    name: "Butter Chicken",
    desc: "Tender chicken in rich tomato-cream sauce",
    price: "₹279",
    rating: "5.0",
    time: "25 min",
    tag: "Chef's Pick",
    emoji: "",
    bg: "bg-yellow-50",
  },
  {
    name: "Thai Noodles",
    desc: "Rice noodles, basil, chili & egg",
    price: "₹179",
    rating: "4.7",
    time: "20 min",
    tag: "Spicy",
    emoji: "",
    bg: "bg-pink-50",
  },
  {
    name: "Caesar Salad",
    desc: "Romaine, parmesan, croutons & caesar dressing",
    price: "₹149",
    rating: "4.6",
    time: "10 min",
    tag: "Healthy",
    emoji: "",
    bg: "bg-lime-50",
  },
];

const Cards = () => {
  const [cart, setCart] = useState({});

  const handleAdd = (name) => {
    setCart((prev) => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
  };

  return (
    <div className="px-8 py-4">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-gray-800">Popular Dishes</h2>
        <span className="text-orange-500 text-sm font-semibold cursor-pointer hover:underline">
          View all →
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {foodItems.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Emoji Card Top */}
            <div className={`${item.bg} h-40 flex items-center justify-center text-7xl relative`}>
              <img src={item.emoji} alt="" className="h-40"/>
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                {item.tag}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-4">
              <h3 className="font-bold text-gray-800 text-base">{item.name}</h3>
              <p className="text-gray-400 text-xs mt-1 mb-3">{item.desc}</p>

              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span>⭐ {item.rating}</span>
                <span>•</span>
                <span>🕐 {item.time}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">{item.price}</span>
                <button  className="bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">Order now</button>
                {cart[item.name] ? (
                  <div className="flex items-center gap-2 bg-orange-50 border border-orange-300 rounded-xl px-3 py-1.5">
                    <button
                      onClick={() =>
                        setCart((prev) => ({
                          ...prev,
                          [item.name]: Math.max(0, (prev[item.name] || 1) - 1),
                        }))
                      }
                      className="text-orange-500 font-bold text-base w-5 text-center"
                    >
                      −
                    </button>
                    <span className="text-orange-600 font-semibold text-sm">{cart[item.name]}</span>
                    <button
                      onClick={() => handleAdd(item.name)}
                      className="text-orange-500 font-bold text-base w-5 text-center"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleAdd(item.name)}
                    className="bg-white hover:bg-orange-600 text-black text-sm border  font-semibold px-4 py-2 rounded-xl transition-colors"
                  >
                    + Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
