import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
export function fetchCartData(){
  return async (dispatch)=>{
    const fetchData = async () => {
      const response = await fetch("https://react-spa-9d9e4-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json");
      if(!response.ok){
        console.log(await response.json())
        throw new Error("fetching failed")
      }
      const data = await response.json();
      return data;
    }
    try{
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({items:cartData.items || [],
        totalQuantity:cartData.totalQuantity ||0
      }));
    }
    catch(error){
      dispatch(uiActions.showNotification({
        status:"error",
        message:"Fetching failed",
        title:"Error!"
        
      })
    );
    }
  }
}


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