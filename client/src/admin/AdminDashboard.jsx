// AdminDashboard.jsx
import React from "react";
import {
  FiHome,
  FiBox,
  FiUsers,
  FiShoppingCart,
} from "react-icons/fi";

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

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* 🔹 Sidebar */}
      <div className="w-64 bg-[#111827] text-white p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-10 text-green-400">
           Admin
        </h1>

        <ul className="space-y-4">
          <li className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FiHome /> Dashboard
          </li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
            <FiBox /> Products
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
          <button className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            Logout
          </button>
        </div>

        {/* 🔸 Stats */}
        <div className="grid md:grid-cols-4 gap-5 mb-8">

          {[
            { title: "Orders", value: "1,240" },
            { title: "Revenue", value: "₹52,000" },
            { title: "Users", value: "320" },
            { title: "Products", value: "85" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-sm border"
            >
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800">
                {item.value}
              </h3>
            </div>
          ))}

        </div>

        {/* 🔸 Charts Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* Line Chart     */}
          <div className="bg-white p-5 rounded-xl shadow-sm border">
            <h3 className="font-semibold mb-4">Orders Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#22c55e"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-5 rounded-xl shadow-sm border">
            <h3 className="font-semibold mb-4">Revenue</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* 🔸 Orders Table */}
        <div className="bg-white p-5 rounded-xl shadow-sm border">
          <h3 className="font-semibold mb-4">Recent Orders</h3>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2 text-left">Order ID</th>
                <th className="text-left">Customer</th>
                <th className="text-left">Item</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-2">#101</td>
                <td>Keshav</td>
                <td>Pizza</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                    Delivered
                  </span>
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-2">#102</td>
                <td>Rahul</td>
                <td>Burger</td>
                <td>
                  <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td className="py-2">#103</td>
                <td>Aman</td>
                <td>Pasta</td>
                <td>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                    Cancelled
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;