import React from "react";
import styles from "./button.module.css";
const Button = (props) => {
  let style = styles.primary
    ? `${styles.button} ${styles.primary}`
    : styles.button;
  return <button className={style}>{props.children}</button>;
};

export default Button;
