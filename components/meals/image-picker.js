'use client';
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({label, name}) {
    const [imagePicked, setimagePicked] = useState();
    const ImageInput = useRef();
  function handlePicker(){
    ImageInput.current.click();
  }
  function handlePickedFile(e){
      const file = e.target.files[0];

      if(!file){
        setPickedImage(null);
        return;
      }

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setimagePicked(fileReader.result)
      };
      fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!imagePicked && <p>No image picked yet</p>} 
            {imagePicked && <Image src={imagePicked} alt={label} fill/>}
            </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={ImageInput}
          onChange={handlePickedFile}
          required
        />
           <button onClick={handlePicker} className={classes.button} type="button">
            Pick an Image
           </button>
      </div>
     
    </div>
  );
}

export default ImagePicker;
