import { useEffect, useRef } from "react";

export default function ResultModal({result,openIfSelected}){
    
    let modalOpen = openIfSelected;
    let dialog = useRef();
    
    
    useEffect(()=>{
        if(modalOpen)
        dialog.current.showModal()
        else{
           dialog.current.close()
        }
    },[modalOpen])

    function closeModal(){
        dialog.current.close()
        modalOpen=false;
    }
    return (
        <dialog
        className=" w-54 text-2xl opacity-90 h-40 gap-5 p-5" 
        ref={dialog}>
            {result ? 
            <div >
                Your answer was correct
            </div>
            :
            <div>
                Wrong answer
            </div>
            }
            <button 
            onClick={closeModal}
            className="border-2 p-2">Close</button>
        </dialog>
    );
}