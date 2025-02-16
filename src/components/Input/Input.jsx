import { forwardRef } from "react";
import styles from "./Input.module.css";
import classNames from "classnames";

const Input = forwardRef(function Input({ isBasePage, placeholder, onChange, value }, ref) {
  return (
    <div className={classNames(styles["input-field"])} ref={ref}>
      <div
        className={classNames({ [styles["input-field__wrapper"]]: isBasePage })}
      >
        <input
          className={classNames(styles["input-field__text"])}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
});

export default Input;
