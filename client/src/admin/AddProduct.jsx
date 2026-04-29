import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
const AddProduct = () => {
  const [images,setImage]=useState([]);


  const [input, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    status: "",
  });

  
  

  

  const handleChange = (e) => {
    setFormData({
      ...input,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
     try {
      const formdata=new FormData();
        for(let key in input){
          formdata.append(key,input[key])
        } 
        
        for (let i=0;i<images.length;i++){
          formdata.append('images',images[i])
        }
     

        let api='http://localhost:9000/admin/addproduct';
        const response=await axios.post(api,formdata,{
  headers:{
    "Content-Type":"multipart/form-data"
  }
});
        Swal.fire({
              title: "Success!",
              text: "Data saved successful",
              icon: "success",
              confirmButtonText: "OK"
            });
      
      
     } catch (error) {
        Swal.fire({
        title: "Error!",
        text: "Something went wrong",
        icon: "error"
      });
     }
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg border">

        {/* 🔸 Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Food Item 🍕
        </h2>

        {/* 🔸 Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Product Name */}
          <div>
            <label className="text-sm text-gray-600">Food Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter food name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-sm text-gray-600">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm text-gray-600">Category</label>
            <select
              name="category"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              onChange={handleChange}
            >
              <option value="">Select category</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-vegetarian">Non-vegetarian</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm text-gray-600">Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write about food..."
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="text-sm text-gray-600">Upload Images</label>
            <input
              type="file"
              multiple
              name="image"
              placeholder="Paste image link"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              onChange={(e)=>{setImage(e.target.files)}}
            />
          </div>

        

          {/* Status */}
          <div>
            <label className="text-sm text-gray-600">Status</label>
            <select
              name="status"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
              onChange={handleChange}
            >
              <option >Select</option>
              <option value="available">Available</option>
              <option value="outofstock">Out of Stock</option>
            </select>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md transition">
            Add Product
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddProduct;