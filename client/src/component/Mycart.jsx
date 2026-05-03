import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import {qntyInc} from "../cartSlice"
import {qntyDec} from "../cartSlice"
function Mycart() {
    const  cart=useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch();
    let [grandTotal,setGrandtotal]=useState(0);
  return (<>
  <hr />
    <h1>Mycart</h1>
  <table >
    <thead>
        <tr>
            <th>#</th>
            <th>Food</th>
            <th>Description</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        {cart.map((item)=>(
            <tr>
                <td>
                    <img src={item.image} alt="" className='h-50 w-50 ' />
                </td>
                <td>{item.foodname} </td>
                <td>{item.description} </td>
                <td>{item.price} </td>
                <td>
                    <button onClick={()=>dispatch(qntyInc({id:item.id}))}><FaPlusSquare /></button>
                    
                    {item.qnty}
                    <button onClick={()=>dispatch(qntyDec({id:item.id}))}><FaSquareMinus /></button>
                </td>

                <td>{item.price*item.qnty}</td>

            </tr>
           
        ))}
    </tbody>
  </table>
  </>
  )
}

export default Mycart