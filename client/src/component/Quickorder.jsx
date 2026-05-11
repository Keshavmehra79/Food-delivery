import React from 'react'
import axios from "axios";
import  { useState,useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
function Quickorder() {
      const {id}=useParams();
      const [products,setProducts]=useState({});
       // Big image state
      const [mainImage, setMainImage] = useState("");
        useEffect(() => {
          if (products.defaultImage) {
            setMainImage(products.defaultImage);
          }
        }, [products]);



      const [input,setInput]=useState({})
      const [form,setForm]=useState("")

console.log(mainImage);

      const loaddata=async()=>{
    try {
      const response=await axios.get(`http://localhost:9000/user/orderproduct/?id=${id}`)

      setProducts(response.data);       
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    loaddata();
  },[])



   const handleChange=async(e)=>{
            
  
            let name=e.target.name;
            let value=e.target.value;
           await setInput(values=>({...input,[name]:value}))
              setForm(input.name)
  
          }
  
  
  
          
  
   const handleSubmit = async (e) => {
     e.preventDefault();
    if(!form){
        toast.warn("Please fill delivery details")
        return
    }
  
    const orderData = {
      customer: input,
      products: products,
      totalAmount: products.price,
    };
  
    try {
      const res = await axios.post(
        "http://localhost:9000/user/sendemail",
        orderData
      );
  
      
      setForm(null)
    } catch (error) {
      console.error(error);
    }
  };
  
  
    const handlePayment = async () => {
  
       if(!form){
        toast.warn("Please fill delivery details")
        return
    }
  
      // create order from backend
      const { data } = await axios.post(
        "http://localhost:9000/admin/create-order",
        {
          amount: products.price,
        }
      );
  
      const options = {
        key: "rzp_test_SmqIyauTkzU1El", // key id
        amount: data.amount,
        currency: data.currency,
        name: "My Store",
        description: "Test Transaction",
        order_id: data.id,
  
        handler: function (response) {
         Swal.fire({
                  title: "Payment Successful",
                  text: 'Your order placed successfully.',
                  icon: 'success',
                  confirmButtonText: 'OK!'
                });
  
          console.log(response);
        },
  
        prefill: {
          name: "Keshav",
          email: "test@gmail.com",
          contact: "9999999999",
        },
  
        theme: {
          color: "#3399cc",
        },
      };
  
      const rzp = new window.Razorpay(options);
  
      rzp.open();
    };
  
  return (<>
        {/* Left-section will here */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-gray-100 min-h-screen">

      {/* LEFT SECTION */}
      <div className="bg-white rounded-2xl shadow-lg p-6">


        {/* Big Image */}
        <div className="w-full h-[450px] overflow-hidden rounded-2xl border">
          <img
            src={mainImage}
            alt=""
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Small Images */}
        <div className="flex gap-4 mt-5">
          {products.images?.map((img, index) => 
          (
            <div
              key={index}
              onMouseEnter={() => setMainImage(img)}
              className="w-24 h-24 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-green-500 cursor-pointer transition"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Product Details */}
        <div className="mt-6">

          <h1 className="text-3xl font-bold text-gray-800">
            {products.foodname}
          </h1>

          <p className="text-green-600 font-semibold mt-2 text-lg">
            {products.category}
          </p>

          <p className="text-gray-600 mt-4 leading-7">
            {products.description}
          </p>

          <div className="mt-5 flex items-center gap-4">
            <span className="text-4xl font-bold text-green-600">
              ₹ {products.price}
            </span>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              {products.status}
            </span>
          </div>
        </div>
      </div>




      {/* Right Section - Checkout Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Checkout
          </h2>

          {/* Total */}
          <div className="bg-gray-100 p-4 rounded-xl mb-6">
            <h3 className="text-lg font-semibold text-gray-700">
              Total Payable
            </h3>

            <p className="text-3xl font-bold text-green-600 mt-2">
              ₹ {products.price}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
              
              <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Name
              </label>

              <input
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Enter name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Email
              </label>

              <input
                name="email"
                onChange={handleChange}
                type="text"
                placeholder="Enter email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>



            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Phone
              </label>

              <input
              name="phone"
                onChange={handleChange}
                type="text"
                placeholder="Enter mobile number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-medium">
                Street Address
              </label>

              <textarea
              name="address"
                onChange={handleChange}
                placeholder="Enter address"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            {/* Button */}
        <button
          type="submit"
          onClick={handlePayment}
          className="cursor-pointer w-full bg-yellow-300 hover:bg-yellow-400 transition text-black py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
        >
          Next
          <FaArrowRight />
        </button>
          </form>
        </div>
        </div>
  
  </>
  )
}

export default Quickorder