import styles from "./CardButton.module.css";
import classNames from "classnames";

function CardButton({ children }) {
  return <div role="button" tabIndex="0" className={classNames(styles["card-button"])}>{children}</div>;
}

export default CardButton;
