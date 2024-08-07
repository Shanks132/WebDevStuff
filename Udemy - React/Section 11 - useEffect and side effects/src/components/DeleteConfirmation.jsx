
import { useEffect,useState } from "react";
import ProgressBar from "./ProgressBar";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  

  useEffect(() => {
    console.log("timer set");
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);
    //closes the warning to delete after 3 seconds 
    return ()=>{
      console.log("Canceling Timer");
      clearTimeout(timer);
    };
  },[]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar/>
    </div>
  );
}
