import styles from "./TopPanel.module.css";
import classNames from "classnames";

function TopPanel({ children }) {
  return <div className={classNames(styles["top-panel"])}>{children}</div>;
}

export default TopPanel;
