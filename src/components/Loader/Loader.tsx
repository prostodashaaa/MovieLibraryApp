import classNames from "classnames";
import styles from "./Loader.module.css";

function Loader() {
  return <div className={classNames(styles.loader)}></div>;
}

export default Loader;
