/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
            
import pulavPic from "../assets/FoodPics/maxresdefault.jpg"
export default function Items({ props }) {
  return (
    <div className='mx-12 grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-4 justify-items-center items-center text-white ' >
      <div className='bg-slate-950 p-4 border-2 rounded-lg border-black flex flex-col justify-center items-center '>
        <img src={pulavPic} alt="vegBiryaniAkaPulav" className='w-5/6' />
        <h1 className=' text-center font-bold p-4 text-lg text-wrap'>Veg Biriyani aka Pulav</h1>
        <p className='font-bold text-yellow-500 bg-slate-600 p-2'>$120.00</p>
        <p className='p-4 text-md text-white text-center'>
          Veg biryani is a flavorful and aromatic Indian dish made with basmati rice, assorted vegetables, and a blend of spices.
        </p>
        <button className='bg-yellow-500 text-amber-900 p-4'>Add to cart</button>
      </div>
    </div>
  )
}