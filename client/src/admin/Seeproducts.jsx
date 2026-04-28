import React from "react";
import { useNavigate } from "react-router-dom";



const SeeProducts = () => {
    const navigate = useNavigate();
  const products = [
    { name: "Pizza", price: "₹200" },
    { name: "Burger", price: "₹120" },
    { name: "Pasta", price: "₹150" },
  ];

  return (
    <div className="p-4">

      {/* 🔸 Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          All Products
        </h2>

       <button
  onClick={() => navigate("/admindashboard/addproduct")}
  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow"
>
  + Add Product
</button>
      </div>

      {/* 🔸 Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {item.name}
            </h3>

            <p className="text-green-600 font-bold text-xl mb-4">
              {item.price}
            </p>

            {/* Action buttons */}
            <div className="flex justify-between">
              <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                Edit
              </button>

              <button className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SeeProducts;