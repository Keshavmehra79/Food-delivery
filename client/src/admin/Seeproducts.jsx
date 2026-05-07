import axios from "axios";
import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { FaSquareMinus } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";

const SeeProducts = () => {
    const navigate = useNavigate();
  
     const [products,setProducts]=useState([]);
    
      const loaddata=async()=>{
        try {
          const response=await axios.get("http://localhost:9000/admin/getproduct")
    
          setProducts(response.data.products);      
          
        } catch (error) {
            console.log(error);
        }
      }
    
      useEffect(()=>{
        loaddata();
      },[])

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
<div className="overflow-x-auto">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="p-3">Image</th>
                    <th className="p-3">Food</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Edit</th>
                    <th className="p-3">Remove</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((item) =>{
                   return(
                     
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="p-3">
                        <img
                          src={item.defaultImage}
                          alt={item.foodname}
                          className="h-16 w-16 object-cover rounded-lg mx-auto"
                        />
                      </td>

                      <td className="p-3 font-semibold">
                        {item.foodname} 
                      </td>

                      <td className="p-3 text-gray-500">
                        {item.description}
                      </td>

                      <td className="p-3 font-medium text-green-600">
                        ₹{item.price}
                      </td>

                      <td className="p-3">
                       <button className="px-3 font-bold border rounded-2xl text-black cursor-pointer " >
                        Edit
                       </button>
                      </td>

                      

                      <td >
                        <button className="px-3 font-bold text-blue-600 cursor-pointer border rounded-2xl" >
                        Remove
                        </button>
                      </td>
                    </tr>
                    
                  )})}

 

                </tbody>
              </table>


            </div>
</div>)
     
};

export default SeeProducts;