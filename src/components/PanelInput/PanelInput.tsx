import styles from "./PanelInput.module.css";
import classNames from "classnames";
import { PanelInputProps } from "./PanelInput.props";

function PanelInput({ children, isBasedPage = true }: PanelInputProps) {
  return (
    <div
      className={classNames(
        styles["panel-input"],
        { [styles["top-panel__search"]]: isBasedPage },
        { [styles["top-panel__login"]]: !isBasedPage }
      )}
    >
      {children}
    </div>
  );
}

export default PanelInput;
