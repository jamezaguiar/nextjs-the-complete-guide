"use client";

import { useRef } from "react";
import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const inputRef = useRef(null);

  const onPickImage = () => {
    inputRef.current.click();
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
        />
        <button className={styles.button} type="button" onClick={onPickImage}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
