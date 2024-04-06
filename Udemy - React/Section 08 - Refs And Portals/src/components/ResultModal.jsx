import { forwardRef,useImperativeHandle,useRef } from "react"
import { createPortal } from 'react-dom'

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset},ref){
  const dialog  = useRef()
  const userLost = remainingTime <= 0 ;


  useImperativeHandle(ref,()=>{
    return {
      open(){
        dialog.current.showModal();
      }
    }
  })
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>} 
      {!userLost && <h2>You Won</h2>} 
      <p>You're time was <strong>{targetTime}</strong>seconds </p>
      <p>You stopped the timer with <strong>{(remainingTime/1000).toFixed(2)} seconds left</strong> seconds remaining</p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>

    </dialog>

  ,document.getElementById("Modal"))

});
export default ResultModal;