import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from "../images/logo.png"
function Userlogin() {
    const [input, setinput] = useState({})
    const navigate=useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        setinput(values => ({ ...values, [name]: val }))
    }

    const handleSubmit = async() => {
        try {
            const res = await axios.post("http://localhost:9000/user/userlogin", input);
            localStorage.setItem("token",res.data.token)
            navigate("/home")
            toast.success("You are logged in!")

        } catch (error) {
            console.log(error.response.data)
            toast.error(error.response.data)
        }
    }
    return (<>
 <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 flex items-center justify-center p-5">

  <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

    {/* LEFT SIDE - FOOD IMAGES */}
    <div className="relative hidden lg:block">

      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-12">

        <h1 className="text-5xl font-extrabold text-white leading-tight">
          Delicious Food <br /> Delivered Fast 🍔
        </h1>

        <p className="text-gray-200 mt-5 text-lg leading-8">
          Order your favorite meals anytime with fast delivery
          and fresh taste directly at your doorstep.
        </p>

        {/* Small Food Cards */}
        <div className="flex gap-4 mt-10">

          <div className="bg-white p-2 rounded-2xl shadow-lg w-28">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
              alt=""
              className="w-full h-20 object-cover rounded-xl"
            />
            <p className="text-center mt-2 font-semibold text-sm">
              Pizza
            </p>
          </div>

          <div className="bg-white p-2 rounded-2xl shadow-lg w-28">
            <img
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e"
              alt=""
              className="w-full h-20 object-cover rounded-xl"
            />
            <p className="text-center mt-2 font-semibold text-sm">
              Burger
            </p>
          </div>

          <div className="bg-white p-2 rounded-2xl shadow-lg w-28">
            <img
              src="https://www.yummytummyaarthi.com/wp-content/uploads/2022/11/red-sauce-pasta-1.jpg"
              className="w-full h-20 object-cover rounded-xl"
            />
            <p className="text-center mt-2 font-semibold text-sm">
              Pasta
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* RIGHT SIDE - LOGIN FORM */}
    <div className="flex items-center justify-center p-8 md:p-14">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center  mb-8">

            <img  className='h-30 m-auto' src={logo} alt="" />
          <p className="text-gray-500 mt-2">
            Login to continue ordering delicious meals
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Name
            </label>

            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-3 rounded-xl font-semibold text-lg shadow-lg"
          >
            Login
          </button>

      

        </div>
      </div>
    </div>
  </div>
</div>
    </>
    )
}

export default Userlogin