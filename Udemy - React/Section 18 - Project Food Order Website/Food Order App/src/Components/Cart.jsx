/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useRef, useEffect } from "react";
import { Context } from "../App";

export default function Cart({ open, handleCartClose }) {
  const [cart,setCart] = useContext(Context);
  

  return ( open && 
    <dialog className="bg-slate-900 text-yellow-200 flex flex-col">
      {Object.keys(cart).map(item => {
        if (cart[item] !== 0) {
          return (
            <div className="bg-slate-900 text-yellow-200 flex content-center items-center" key={item}>
              <span className="p-1 font-semibold text-xl">{item} :</span>
              <div id="quantityAdjust" className="flex">
                <span className="p-1 font-semibold text-xl">{cart[item]}</span>
              </div>
            </div>
          );
        }
        return null;
      })}
      <button className="bg-slate-900 text-yellow-200 content-center" onClick={handleCartClose}>Close</button>
    </dialog>
  );
}