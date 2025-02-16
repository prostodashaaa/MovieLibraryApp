import styles from "./PanelInput.module.css";
import classNames from "classnames";

function PanelInput({ children, isBasedPage }) {
  return (
    <div className={classNames(styles['panel-input'], { [styles["top-panel__search"]]: isBasedPage },
      { [styles["top-panel__login"]]: !isBasedPage }
    )}>
      {children}
    </div>
  );
}

export default PanelInput;
