import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("bag")
  ? JSON.parse(localStorage.getItem("bag"))
  : { bagItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addToBag: (state, action) => {
      const item = action.payload;
    
      const existItem = state.bagItems.find((x) => x._id === item._id && x.size === item.size);

      if(existItem){
       // find item index
       const itemIndex = state.bagItems.findIndex(x => x._id === existItem._id && x.size === existItem.size);
       // update item qty to new total
       state.bagItems[itemIndex].qty += item.qty;
      } else {
        state.bagItems = [...state.bagItems, item]
      }

      // item price
      state.itemsPrice = addDecimals(
        state.bagItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      // shipping price
      state.shippingPrice = addDecimals(state.itemsPrice >= 100 ? 0 : 10);

      // total price
      state.totalPrice = (
        Number(state.itemsPrice) + Number(state.shippingPrice)
      ).toFixed(2);

      localStorage.setItem("bag", JSON.stringify(state));
    },
  },
});

export const { addToBag } = bagSlice.actions;

export default bagSlice.reducer;
