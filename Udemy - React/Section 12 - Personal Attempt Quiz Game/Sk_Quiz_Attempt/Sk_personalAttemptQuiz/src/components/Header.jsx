import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function Header({}) {
    const inputRef = useRef()
    const [name,setName]= useState("");
    function handleSetName(){
        setName(inputRef.current.value);

    }
    return (
        <>
            <div className=' bg-purple-950 h-1/6 w-4/6 mx-auto text-4xl opacity-95'>
                <p className='opacity-100'>
                    Welcome To Kaun banega hazarpati.
                    
                </p>
                    
                {name}
                <br/>
                <input
                    className='bg-purple-900 max-h-full w-2/5 content-center px-5'
                    type='text'
                    placeholder='Enter Your Name'
                    ref={inputRef}>
                </input>
                <button 
                    className="m-2 px-2 hover:bg-purple-600 bg-puple-900 "
                    onClick={handleSetName}>       
                    Set Name
                </button>

            </div>
        </>
    )
}