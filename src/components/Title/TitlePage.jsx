import styles from "./TitlePage.module.css";
import classNames from "classnames";

function TitlePage({ title, text }) {
  const data = text ? text : "";

  return (
    <div className={classNames(styles.title)}>
      <h1 className={classNames(styles["title__h1"])}>{title}</h1>
      {text ? (
        <p className={classNames(styles["title__text"])}>{data}</p>
      ) : null}
    </div>
  );
}

export default TitlePage;
