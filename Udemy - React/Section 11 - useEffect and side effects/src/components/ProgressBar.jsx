import { useState,useEffect } from "react";
const TIMER = 3000;
export default function ProgressBar (){
  const [remainingTime, setRemainingTIme]=useState(TIMER)
  useEffect(()=>{
    console.log("Interval Starts")
    const interval = setInterval(()=>{
      setRemainingTIme(prevTime=>prevTime-10);
    },10);
    return ()=>{
      console.log("Clearing out interval")
      clearInterval(interval)
    }
  },[]);
  return (
    <progress value={remainingTime} max={TIMER}/>
  )
}