import {useRef, useEffect} from 'react';
import { createPortal } from 'react-dom';

const Modal = function Modal({ children,open, onClose }) {
  const dialog = useRef();
  useEffect(()=>{
    if(open){
      dialog.current.showModal()   
    } 
    else{
      dialog.current.close() ;
    }
  },[open])
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
//ref wont work because jsx wont be executed hence here we can also use useEffect

export default Modal;
