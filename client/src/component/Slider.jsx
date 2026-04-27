import React, { useState } from "react";



const Slider = () => {
  const Slider = [
  { icon: "🍕", name: "Pizza" },
  { icon: "🍔", name: "Burgers" },
  { icon: "🍣", name: "Sushi" },
  { icon: "🥗", name: "Salads" },
  { icon: "🌮", name: "Tacos" },
  { icon: "🍜", name: "Noodles" },
  { icon: "🍰", name: "Desserts" },
  { icon: "🥤", name: "Drinks" },
];
  const [active, setActive] = useState("Pizza");

  return (
    <div className="px-8 pb-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">What's on your mind?</h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {Slider.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`flex flex-col items-center gap-1 min-w-[72px] py-3 px-2 rounded-xl border transition-all text-sm font-medium
              ${active === cat.name
                ? "bg-orange-500 text-white border-orange-500 shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"
              }`}
          >
            <span className="text-2xl">{cat.icon}</span>
            <span className="text-xs">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
