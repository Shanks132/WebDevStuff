import { useState } from "react"
import Output from "./Output"

export default function Greeting(){
  const [clicked, setClicked] = useState(false)
  return (
    <div>
      <button onClick={()=>{
        setClicked(!clicked)
      }}>
        Click
      </button>
      <p>Hello</p>
      <h2>
       {!clicked ? <Output>Ram Ram</Output>:<Output>Satya Hai</Output>}
      </h2>
    </div>
  )
}