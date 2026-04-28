import React from "react";
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


const DashboardHome = () => {
  return (
    <>
      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-5 mb-8">
        {[ 
          { title: "Orders", value: "1,240" },
          { title: "Revenue", value: "₹52,000" },
          { title: "Users", value: "320" },
          { title: "Products", value: "85" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow-sm border">
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



    </>
  );
};

export default DashboardHome;