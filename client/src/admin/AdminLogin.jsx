
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Swal from "sweetalert2"
import axios from "axios"
const AdminLogin = () => {
 
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate=useNavigate();

    const handleSubmit=async(e)=>{
      e.preventDefault()
       try {
        let api=`${import.meta.env.VITE_API_URL}/admin/adminlogin`;
      const response=await axios.post(api,{email:email,password:password});
      localStorage.setItem("Admin",response.data.admin.email)
      Swal.fire({
      title: "Success!",
      text: "Login successful",
      icon: "success",
      confirmButtonText: "OK"
    });
      navigate("/admindashboard")
   
    
  } catch (error) {
      Swal.fire({
  title: "Error!",
  text: error.response.data,
  icon: "error"
});
  }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="flex w-[900px] shadow-lg rounded-xl overflow-hidden bg-white">

        {/* LEFT SIDE (FORM) */}
        <div className="w-1/2 p-20 ">
          <h2 className="text-xl font-bold mb-6">Welcome Back As Admin Login</h2>

          <form className="space-y-4 " onSubmit={handleSubmit} >

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
              onChange={(e)=>{setEmail(e.target.value)}}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
              onChange={(e)=>{setPassword(e.target.value)}}
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

           

            {/* Button */}
            <button  className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
              Sign In
            </button>
          </form>

         
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="food"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;