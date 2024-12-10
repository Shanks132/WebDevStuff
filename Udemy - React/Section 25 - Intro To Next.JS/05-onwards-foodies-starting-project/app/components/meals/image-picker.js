'use client'
import React, { useRef, useState } from 'react'
import classes from "./image-picker.module.css"
import Image from 'next/image';
export default function ImagePicker({label, name}) {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState();


  function handlePickClick(){
    imageInputRef.current.click();
  }
  function handleImageChange(event){
    const file = event.target.files[0];
    if(!file){
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = ()=>{
      setPickedImage(fileReader.result);
    }
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={"image"} >{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}          
          {pickedImage && <Image src={pickedImage} alt="userImage" fill/>}
        </div>
        <input 
        className={classes.input} ref={imageInputRef}
        onChange={handleImageChange} required
        id="image" type="file" 
        accept='image/png, image/jpeg, image/jpg' 
        name={name}/>
      </div>
      <button type="button" className={classes.button} onClick={handlePickClick}>Pick an Image</button>
    </div>
  )
}
