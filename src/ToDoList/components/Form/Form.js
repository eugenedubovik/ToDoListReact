import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';


export const Form = ({
  inputValue, onChange, onSubmit, autoFocus = false,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <p className={styles.p}>do something</p>
      <input ref={inputRef} value={inputValue} onChange={onChange} className={styles.input} />
      <button type="submit" className={styles.button}>Add</button>
    </form>
  );
};
