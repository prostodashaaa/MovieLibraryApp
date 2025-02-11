import styles from "./BottomPanel.module.css";
import classNames from "classnames";

function BottomPanel({ children }) {
  return <div className={classNames(styles["bottom-panel"])}>{children}</div>;
}

export default BottomPanel;
