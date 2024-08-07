import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import { sendCartData } from './store/cart-actions';
import { fetchCartData } from './store/cart-actions';
let initial = true;

function App() {
  const dispatch= useDispatch();

  const showCart = useSelector(state=>state.ui.cartVisible);
  const cart = useSelector((state)=>state.cart);
  const notification = useSelector(state=>state.ui.notification)
  // useEffect(()=>{
  //   const sendCartData=async ()=>{
  //     dispatch(uiActions.showNotification({
  //       status:'sending',
  //       title:'Sneding....',
  //       message:'sending cart data to the server'
  //     }));
  //     const response =await  fetch('https://react-spa-9d9e4-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
  //     {
  //       method:'PUT',
  //       body:JSON.stringify(cart),
  //     });
  //     if(!response.ok){
  //       throw new Error("data sending failed");
  //     }
  //     dispatch(uiActions.showNotification({
  //       status:'success',
  //       title:'Sent',
  //       message:'Cart data updated on the server!'
  //     }));
  //   }
  //   if(initial){
  //     initial=false;
  //     return;
  //   }
  //   sendCartData().catch((error)=>{
  //     dispatch(uiActions.showNotification({
  //       status:'error',
  //       title:'Failed...',
  //       message:'Cart data not sent  !'
  //     }));
  //   })
  // },
  // [cart, dispatch]);
  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch])
  
  useEffect(()=>{
    if(initial){
        initial=false;
        return;
    }
    dispatch(sendCartData(cart))
  },[cart,dispatch])
  
  return (
    <Fragment>
      {notification &&<Notification 
      status={notification.status}
      title={notification.title}
      message={notification.message}
      />}
    <Layout>  
      {showCart && <Cart />}
    <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
