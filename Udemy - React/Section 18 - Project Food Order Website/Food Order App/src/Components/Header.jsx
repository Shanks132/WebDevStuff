/* eslint-disable react/prop-types */

import mgRonaldsImg from "../assets/mgRonalds.jpg" 


export default function Header({handleOpenCart}){
  return (
    <header className='font-bold text-4xl flex justify-between align-middle bg-[#1b170a]
    text-white p-4'>
      
      <div className='flex gap-2'>
      <img src={mgRonaldsImg} className=' w-12' alt="maou sama icon"/>
        <p>MgRonalds</p>
      </div>
      <p className='font-normal text-2xl p-2'>
        <button className="hover:underline" onClick={handleOpenCart}>
          CART
        </button>
        </p>
       
      </header>
  )
}