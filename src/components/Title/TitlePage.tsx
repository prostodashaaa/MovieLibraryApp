import styles from "./TitlePage.module.css";
import classNames from "classnames";
import { TitlePageProps } from "./TitlePage.props";

function TitlePage({ title, text }: TitlePageProps) {
  return (
    <div className={classNames(styles.title)}>
      <h1 className={classNames(styles.title__h1)}>{title}</h1>
      {text ? (
        <p className={classNames(styles.title__text)}>{text}</p>
      ) : null}
    </div>
  );
}

export default TitlePage;
