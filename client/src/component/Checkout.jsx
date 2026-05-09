import axios from "axios";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
function Checkout() {
  const [input,setInput]=useState({})
  const [form,setForm]=useState("")
  const cart = useSelector((state) => state.mycart.cart);

  const totalamount = cart.reduce(
    (acc, item) => acc + item.price * item.qnty,
    0
  );

  

    const handleChange=async(e)=>{
          

          let name=e.target.name;
          let value=e.target.value;
         await setInput(values=>({...input,[name]:value}))
            setForm(input.name)

        }

console.log(form)


        

 const handleSubmit = async (e) => {
   e.preventDefault();
  if(!form){
      toast.warn("Please fill delivery details")
      return
  }

  const orderData = {
    customer: input,
    products: cart,
    totalAmount: totalamount,
  };

  try {
    const res = await axios.post(
      "http://localhost:9000/user/sendemail",
      orderData
    );

    toast.success(res.data.message,{
      position:"top-center",
      theme:"dark"
    });
    setForm(null)
  } catch (error) {
    console.error(error);
  }
};


  const handlePayment = async () => {

    // create order from backend
    const { data } = await axios.post(
      "http://localhost:9000/admin/create-order",
      {
        amount: totalamount,
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
        alert("Payment Successful");

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


 


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      
      {/* Main Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Left Section - Product List */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-3">
            Product List
          </h2>

          <div className="space-y-5">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 border rounded-xl p-4 hover:shadow-md transition"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt=""
                  className="w-28 h-28 object-cover rounded-lg"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-700">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Quantity: {item.qnty}
                  </p>

                  <p className="text-lg font-bold text-green-600 mt-2">
                    ₹ {item.price * item.qnty}
                  </p>
                </div>
              </div>
            ))}
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
              ₹ {totalamount}
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
          // onClick={handlePayment}
          className="cursor-pointer w-full bg-yellow-300 hover:bg-yellow-400 transition text-black py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
        >
          Next
          <FaArrowRight />
        </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;