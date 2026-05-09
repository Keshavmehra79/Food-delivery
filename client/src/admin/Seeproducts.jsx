import axios from "axios";
import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { FaSquareMinus } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";
import Swal from "sweetalert2";
const SeeProducts = () => {
    const navigate = useNavigate();
   const [editData,seteditData]=useState({})
   const [openEdit,setOpenEdit]=useState(false);
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

      const delProduct=async(id)=>{
        const api=`http://localhost:9000/admin/delete/?id=${id}`;
        const response=await axios.get(api)
        Swal.fire({
                      title: "Success!",
                      text: "Product removed succesfully",
                      icon: "success",
                      confirmButtonText: "OK"
                    });
        loaddata();
        
      }


      const myEdit=(item)=>{
        seteditData(item);
        setOpenEdit(true)
        
      }

      const handleUpdate=async()=>{
        const api=`http://localhost:9000/admin/update`;
        const response=await axios.post(api,editData)
           Swal.fire({
                      title: "Success!",
                      text: "Product updated succesfully",
                      icon: "success",
                      confirmButtonText: "OK"
                    });
        loaddata();
        setOpenEdit(false)
        
      }

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
                    <th className="p-3">Status</th>
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
                        {item.status}
                      </td>

                      <td className="p-3 font-medium text-green-600">
                        ₹{item.price}
                      </td>

                      <td className="p-3">
                       <button onClick={()=>{myEdit(item)}} className="px-3 font-bold border rounded-2xl text-black cursor-pointer " >
                        Edit
                       </button>
                      </td>

                      

                      <td >
                        <button onClick={()=>{delProduct(item._id)}} className="px-3 font-bold text-blue-600 cursor-pointer border rounded-2xl" >
                        Remove
                        </button>
                      </td>
                    </tr>
                    
                  )})}

 

                </tbody>
              </table>


            </div>
            {
  openEdit && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      <div className="bg-white p-6 rounded-xl shadow-xl w-[400px]">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Update Product
        </h2>

         <div>
            <label className="text-sm text-gray-600">Food Name</label>
            <input
              type="text"
              placeholder="food"
              value={editData.foodname}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
               onChange={(e) =>
            seteditData({ ...editData, foodname: e.target.value })
          }
            />
          </div>

        {/* status */}
        <div>
            <label className="text-sm text-gray-600">Status</label>
            <select
            value={editData.status}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
               onChange={(e) =>
            seteditData({ ...editData, status: e.target.value })
          }
            >
              <option >Select</option>
              <option value="available">Available</option>
              <option value="outofstock">Out of Stock</option>
            </select>
          </div>


         <div>
            <label className="text-sm text-gray-600">Price</label>
            <input
              type="number" 
              placeholder="Price"
              value={editData.price}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
               onChange={(e) =>
            seteditData({ ...editData, price: e.target.value })
          }
            />
          </div>

        <div className="flex justify-between mt-4">

          <button
            onClick={() => setOpenEdit(false)}
            className="bg-gray-300 hover:bg-red-500 text-black px-4 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
          onClick={handleUpdate}
            className="bg-blue-200 hover:bg-blue-600 text-black px-4 py-2 rounded-lg"
          >
            Update
          </button>

        </div>

      </div>
    </div>
  )
}
</div>)
     
};

export default SeeProducts;