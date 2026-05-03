import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const cartSlice = createSlice({
    name: "mycart",
    initialState: {
        cart: []
    },
    reducers: {
        addtocart: (state, actions) => {
            //filter true condition ka array bnata h
            const Data = state.cart.filter(item => item.id == actions.payload.id);
            if (Data.length >= 1) {
                Swal.fire({
                    text: "Product already exists in cart",
                    confirmButtonText: "OK",
                });
                return
            }
            state.cart.push(actions.payload);
        },
        qntyInc: (state, actions) => {
            for (var i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == actions.payload.id) {
                    state.cart[i].qnty++;
                }
            }
        },
        qntyDec: (state, actions) => {
            for (var i = 0; i < state.cart.length; i++) {

                if (state.cart[i].id == actions.payload.id) {
                    if(state.cart[i].qnty==1){
                    return
                }
                    state.cart[i].qnty--;
                }
            }
        }
    }

})


export const { addtocart, qntyInc,qntyDec } = cartSlice.actions;
export default cartSlice.reducer;