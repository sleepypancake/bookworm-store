import React from "react";
import styles from './button.module.scss'

export const Button = ({onClick, children}) => (
    <button className={styles.button} onClick={onClick}>{children}</button>
)