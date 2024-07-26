import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, totalAmount: 0, changed:false},
  reducers: {
    replaceCart(state,action){
      state.totalQuantity = action.payload.totalQuantity;
      state.items=action.payload.items;

    },
    addItemToCart(state, action) {
      state.totalQuantity++;
      
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
        console.log("new sht");
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      state.totalQuantity--;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});
export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "sending",
        title: "Sneding....",
        message: "sending cart data to the server",
      })
    );
    
    async function sendRequest(){
      const response = await fetch(
        "https://react-spa-9d9e4-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if(!response.ok){
        throw new Error("Sending failed");
      }
    }
    try{
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Sent",
          message: "Cart data updated on the server!",
        })
      );
    }
    catch(error){
      sendCartData().catch((error)=>{
            dispatch(uiActions.showNotification({
              status:'error',
              title:'Failed...',
              message:'Cart data not sent  !'
            }));
          })
    }
    
  };
}
export const cartActions = cartSlice.actions;
export default cartSlice;
