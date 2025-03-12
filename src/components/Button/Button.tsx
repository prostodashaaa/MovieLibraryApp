import { forwardRef } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import classNames from "classnames";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, appearence = "main", onClick },
  ref
) {
  return (
    <button
      className={classNames(styles.button, {
        [styles["main-button"]]: appearence === "main",
        [styles["movie-item__description_add"]]: appearence === "favourite",
        [styles["movie-item__description_done"]]: appearence === "done-favourite",
      })}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
