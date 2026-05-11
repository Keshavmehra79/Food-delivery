import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
function Orders() {
    const [orders,setOrders]=useState([]);
    
      const loaddata=async()=>{
        try {
          const response=await axios.get("http://localhost:9000/admin/orders")
    
          setOrders(response.data.orders);      
          
        } catch (error) {
            console.log(error);
        }
      }
      console.log(orders);
      
    
      useEffect(()=>{
        loaddata();
        
    },[])
    console.log(orders);
  return (<>
 <div className="min-h-screen bg-gray-100 p-6">

        <h1 className="text-3xl font-bold text-center mb-8">
          All Orders
        </h1>

        <div className="grid gap-6">

          {
            orders.map((item,index)=>{

              return(
                <div
                  key={item._id}
                  className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
                >

                  {/* Top Section */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        Order #{index+1}
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">
                        Order ID : {item._id}
                      </p>

                      <p className="text-sm text-gray-500">
                        Date : {new Date(item.createdAt).toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {item.orderStatus}
                      </span>
                    </div>

                  </div>


                  {/* Customer Info */}
                  <div className="mt-6 grid md:grid-cols-2 gap-4">

                    <div className="bg-gray-50 p-4 rounded-xl">

                      <h3 className="font-bold text-lg mb-3 text-gray-700">
                        Customer Details
                      </h3>

                      <p>
                        <span className="font-semibold">Name :</span>{" "}
                        {item.customer.name}
                      </p>

                      <p>
                        <span className="font-semibold">Email :</span>{" "}
                        {item.customer.email}
                      </p>

                      <p>
                        <span className="font-semibold">Phone :</span>{" "}
                        {item.customer.phone}
                      </p>

                      <p>
                        <span className="font-semibold">Address :</span>{" "}
                        {item.customer.address}
                      </p>

                    </div>


                    {/* Amount */}
                    <div className="bg-gray-50 p-4 rounded-xl flex flex-col justify-center">

                      <h3 className="font-bold text-lg mb-3 text-gray-700">
                        Payment Details
                      </h3>

                      <p className="text-2xl font-bold text-blue-600">
                        ₹ {item.totalAmount}
                      </p>

                      <p className="text-gray-500 mt-2">
                        Total Products : {item.products.length}
                      </p>

                    </div>

                  </div>


                  {/* Products */}
                  <div className="mt-6">

                    <h3 className="font-bold text-lg mb-4 text-gray-700">
                      Ordered Products
                    </h3>

                    {
                      item.products.length===0
                      ?
                      <p className="text-red-500">
                        No Products Found
                      </p>
                      :
                      <div className="overflow-x-auto">

                        <table className="w-full border border-gray-200">

                          <thead className="bg-gray-200">

                            <tr>
                              <th className="p-3 text-left">Image</th>
                              <th className="p-3 text-left">Product</th>
                              <th className="p-3 text-left">Price</th>
                              <th className="p-3 text-left">Quantity</th>
                              <th className="p-3 text-left">Total</th>
                            </tr>

                          </thead>

                          <tbody>

                            {
                              item.products.map((pro,idx)=>{

                                return(
                                  <tr
                                    key={idx}
                                    className="border-t"
                                  >

                                    <td className="p-3">
                                      <img
                                        src={pro.image}
                                        alt=""
                                        className="w-16 h-16 object-cover rounded-lg"
                                      />
                                    </td>

                                    <td className="p-3 font-medium">
                                      {pro.name}
                                    </td>

                                    <td className="p-3">
                                      ₹ {pro.price}
                                    </td>

                                    <td className="p-3">
                                      {pro.qnty}
                                    </td>

                                    <td className="p-3 font-semibold text-green-600">
                                      ₹ {pro.price * pro.qnty}
                                    </td>

                                  </tr>
                                )

                              })
                            }

                          </tbody>

                        </table>

                      </div>
                    }

                  </div>

                </div>
              )

            })
          }

        </div>

      </div>

  </>
  )
}

export default Orders