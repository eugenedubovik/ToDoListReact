import React from 'react';
import styles from './styles.module.css';

export const NavMenu = () => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button}>All</button>
      <button type="button" className={styles.button}>Active</button>
      <button type="button" className={styles.button}>Done</button>
    </div>
  );
};
