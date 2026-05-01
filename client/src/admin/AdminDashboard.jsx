// AdminDashboard.jsx
import React, { useEffect } from "react";
import {
  FiHome,
  FiBox,
  FiUsers,
  FiShoppingCart,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const data = [
  { name: "Mon", orders: 30, revenue: 4000 },
  { name: "Tue", orders: 45, revenue: 3000 },
  { name: "Wed", orders: 60, revenue: 5000 },
  { name: "Thu", orders: 40, revenue: 3500 },
  { name: "Fri", orders: 80, revenue: 7000 },
  { name: "Sat", orders: 55, revenue: 6000 },
];
import { Link,Outlet } from "react-router-dom";
 
const AdminDashboard = () => {
  const nav=useNavigate();
     
const logOut=()=>{
  localStorage.clear();
  nav("/admin")

}

useEffect(()=>{
   if(!localStorage.getItem("Admin")){
        nav("/admin")
      }
},[])
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* 🔹 Sidebar */}
      <div className="w-64 bg-[#111827] text-white p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-10 text-green-400">
           Admin
        </h1>

        <ul className="space-y-4">
          <li className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer" onClick={()=>{nav("/admindashboard")}}>
            <FiHome /> Dashboard
          </li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FiBox /><Link to="/admindashboard/seeproducts">Products</Link>
          </li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FiShoppingCart /> Orders
          </li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FiUsers /> Users
          </li>
        </ul>
      </div>

      {/* 🔹 Main */}
      <div className="flex-1 p-6">

        {/* 🔸 Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Dashboard Overview
          </h2>
          <button className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg" onClick={logOut}>
            Logout
          </button>
        </div>

        <Outlet/>

      </div>
    </div>
  );
};

export default AdminDashboard;