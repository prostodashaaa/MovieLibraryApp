import classNames from "classnames";
import styles from "./Error.module.css";
import { ErrorProps } from "./Error.props";

export function ErrorPage({ children }: ErrorProps) {
  return <div className={classNames(styles.error)}>{children}</div>;
}
