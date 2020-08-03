import React from 'react';
import styles from './styles.module.css';

export const Button = ({ children, onClick, color }) => {
  return <button type="submit" className={styles.button} onClick={onClick} style={{ backgroundColor: color }}>{children}</button>;
};
