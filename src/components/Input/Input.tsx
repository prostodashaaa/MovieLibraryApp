import { forwardRef } from "react";
import styles from "./Input.module.css";
import classNames from "classnames";
import { InputProps } from "./Input.props";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { isBasePage = true, placeholder, onChange, value, ...props },
  ref
) {
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
          {...props}
        />
      </div>
    </div>
  );
});

export default Input;
