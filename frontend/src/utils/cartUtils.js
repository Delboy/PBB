export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  

export const updateCart = (state) => {
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
}