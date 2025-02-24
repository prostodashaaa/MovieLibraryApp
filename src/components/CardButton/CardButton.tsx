import styles from "./CardButton.module.css";
import classNames from "classnames";
import { ButtonProps } from "../Button/Button.props";

function CardButton({ children }: ButtonProps) {
  return (
    <div className={classNames(styles["card-button"])}>
      {children}
    </div>
  );
}

export default CardButton;
