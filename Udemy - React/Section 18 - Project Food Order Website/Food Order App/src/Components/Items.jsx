/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
            
import { useContext } from "react"
import { Context } from "../App"
export default function Items({foodName, foodPic, description, price }) {
  const [cart,setCart] = useContext(Context);
  function handleCartAdd(foodName){
    setCart(prevCart =>{
      const oldVal = prevCart[foodName] || 0;
      const updatedCart = {...prevCart};
      updatedCart[foodName] = oldVal+1;
      return updatedCart;
    })
  }
  function handleCartRemove(foodName){
    setCart(prevCart =>{
      const oldVal = prevCart[foodName] || 0;
      const updatedCart = {...prevCart};
      updatedCart[foodName] = oldVal-1;
      return updatedCart;
    })
  }
  return (
    
      <div className='bg-slate-950 p-4 border-2 rounded-lg border-black flex flex-col justify-center items-center max-h-[38rem] min-h-[35rem]'>
        <img src={"http://localhost:3000/"  + foodPic} alt="j1" className='w-5/6 h-56' />
        <h1 className=' text-center font-bold p-4 text-lg text-wrap'>{foodName}</h1>
        <p className='font-bold text-yellow-500 bg-slate-600 p-2'>₹ {price}</p>
        <p className='p-4 text-md text-white text-center'>
        {description}</p>

        <button 
          className='bg-yellow-500 text-amber-900 p-4' 
          onClick={()=>{handleCartAdd(foodName)}}>
          {"Add"}
        </button>
        {cart[foodName]>0 ? <button 
          className='bg-yellow-500 text-amber-900 p-4' 
          onClick={()=>{handleCartRemove(foodName)}}>
          Remove
        </button>:null}
        
      </div>
    
 )
}