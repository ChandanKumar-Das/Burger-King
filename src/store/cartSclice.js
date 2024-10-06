import { createSlice } from "@reduxjs/toolkit";

const localStorageCartData = localStorage.getItem('cartData');
const initialState = localStorageCartData ? JSON.parse(localStorageCartData) : [];

const cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
           // console.log(state, action);
           
            const existingCartData = localStorage.getItem('cartData');
            const existingCart = existingCartData ? JSON.parse(existingCartData) : [];
    
            const existingItemIndex = existingCart.findIndex(item => item.id === action.payload.id);
            
            if (existingItemIndex !== -1) {
                existingCart[existingItemIndex].quantity += 1;
            } else {
                const newItem = {
                    ...action.payload,
                    quantity: 1, 
                };
                existingCart.push(newItem);
            }
            localStorage.setItem('cartData', JSON.stringify(existingCart));
            //state.push(action.payload);
            return state = existingCart;
        },
        

          remove(state, action) {
            console.log(state, action);
            
           
            const index = state.findIndex(item => item.id === action.payload);
          
            if (index !== -1) {
              state.splice(index, 1);
              localStorage.setItem('cartData', JSON.stringify(state));
              return state;
            }
            return state;
          }
          
          
      
        }
    
})
//console.log(initialState)
export const {add ,remove} =cartslice.actions

export default cartslice.reducer