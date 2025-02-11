import { forwardRef } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

const Button = forwardRef(function Button({ text, onClick }, ref) {
  return (
    <button className={classNames(styles["main-button"])} onClick={onClick} ref={ref}>
      {text}
    </button>
  );
});

export default Button;
