
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlusSquare } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaSquareMinus } from "react-icons/fa6";
import { qntyInc, qntyDec,removeItem } from "../cartSlice";
import { useNavigate } from "react-router-dom";
function Mycart() {
  const navigate=useNavigate();
  const cart = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const totalamount=cart.reduce(
    (acc,item)=>acc+item.price*item.qnty,
    0
  )
  

  const goOncheckout=()=>{
    if(cart.length==0){
      toast.warn("Please add atleast one product to checkout",{
        position:"top-center",
        theme:"dark"
      });
      return
    }
    navigate("/checkout")
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 My Cart</h1>

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="p-3">Image</th>
                    <th className="p-3">Food</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Quantity</th>
                    <th className="p-3">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {cart.map((item) =>{
                     let totalamount=0;
                   return(
                     
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="p-3">
                        <img
                          src={item.image}
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
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() =>
                              dispatch(qntyDec({ id: item.id }))
                            }
                            className="text-red-500 hover:scale-110 transition"
                          >
                            <FaSquareMinus size={20} />
                          </button>

                          <span className="font-semibold">
                            {item.qnty}
                          </span>

                          <button
                            onClick={() =>
                              dispatch(qntyInc({ id: item.id }))
                            }
                            className="text-green-500 hover:scale-110 transition"
                          >
                            <FaPlusSquare size={20} />
                          </button>
                        </div>
                      </td>

                      <td className="p-3 font-bold text-blue-600">
                        ₹{item.price * item.qnty}
                      </td>

                      <td >
                        <button className="p-3 font-bold text-blue-600 cursor-pointer" onClick={()=>dispatch(removeItem({id:item.id}))}>
                        Remove
                        </button>
                      </td>
                    </tr>
                    
                  )})}

 

                </tbody>
              </table>


            </div>

            {/* Grand Total Section */}
            <div className="flex justify-end mt-6">
              <div className="bg-gray-100 p-4 rounded-xl shadow-md w-72 text-right">
                <h2 className="text-lg font-semibold text-gray-600">
                  Grand Total
                </h2>
                <p className="text-2xl font-bold text-green-600">
                  ₹{totalamount}
                </p>
              </div>
            </div>
          </>
        )}
        <button className="text-red-500 cursor-pointer hover:scale-110 transition  px-2 border-2 rounded-full ml-auto" onClick={goOncheckout}><p>Checkout</p></button>
      </div>
    </div>
  );
}

export default Mycart;