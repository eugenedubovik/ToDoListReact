import React from 'react';
import styles from './styles.module.css';


export const ToDoItem = ({
  children, id, onClickDone, onClickDel,
}) => {
  return (
    <div className={styles.container}>
      {children}
      <button type="button" onClick={onClickDone}>Done</button>
      <button type="button" onClick={() => { onClickDel(id); }}>Del</button>
    </div>
  );
};
