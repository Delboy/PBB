import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("bag")
  ? JSON.parse(localStorage.getItem("bag"))
  : { bagItems: [] };

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addToBag: (state, action) => {
      const item = action.payload;

      const existItem = state.bagItems.find(
        (x) => x._id === item._id && x.size === item.size
      );

      if (existItem) {
        // find item index
        const itemIndex = state.bagItems.findIndex(
          (x) => x._id === existItem._id && x.size === existItem.size
        );
        // update item qty to new total
        state.bagItems[itemIndex].qty += item.qty;
      } else {
        state.bagItems = [...state.bagItems, item];
      }

      return updateCart(state);
    },
    adjustItemQty: (state, action) => {
      // find item
      const item = action.payload.product;
      const itemIndex = state.bagItems.findIndex((x) => x._id === item._id && x.size === item.size);

      // Get amount to adjust 
      const amount = action.payload.amount;

      // adjust qty of item by payload
      state.bagItems[itemIndex].qty += amount;

      return updateCart(state)

    },
    removeItem: (state, action) => {
      const item = action.payload.product;
      const itemIndex = state.bagItems.findIndex((x) => x._id === item._id && x.size === item.size);
      state.bagItems.splice(itemIndex, 1)

      return updateCart(state)
    }
  },
});

export const { addToBag, adjustItemQty, removeItem } = bagSlice.actions;

export default bagSlice.reducer;
