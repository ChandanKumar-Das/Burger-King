import { createSlice } from "@reduxjs/toolkit";

const localStorageCartData = localStorage.getItem("cartData");
const initialState = localStorageCartData
  ? JSON.parse(localStorageCartData)
  : [];

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      // console.log(state, action);

      const existingCartData = localStorage.getItem("cartData");
      const existingCart = existingCartData ? JSON.parse(existingCartData) : [];

      const existingItemIndex = existingCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        existingCart[existingItemIndex].quantity += 1;
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        existingCart.push(newItem);
      }
      localStorage.setItem("cartData", JSON.stringify(existingCart));
      //state.push(action.payload);
      return (state = existingCart);
    },

    remove(state, action) {
     // console.log(state, action);

      const index = state.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        const existingItem = state[index];

        if (existingItem.quantity === 1) {
          state.splice(index, 1);
        } else {
          existingItem.quantity -= 1;
        }

        localStorage.setItem("cartData", JSON.stringify(state));

        return state;
      }

      return state;
    },

    clear() {
      localStorage.removeItem("cartData");
      return [];
    },
  },
});
//console.log(initialState)
export const { add, remove, clear } = cartslice.actions;

export default cartslice.reducer;
