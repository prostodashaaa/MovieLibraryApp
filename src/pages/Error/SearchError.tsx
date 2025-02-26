import classNames from "classnames";
import styles from "./Error.module.css";
import { ErrorPage } from "./Error";

export function SearchError() {
  return <ErrorPage>{"Упс... Ничего не найдено"}<p className={classNames(styles.error__p)}>Попробуйте изменить запрос или ввести более точное название фильма</p></ErrorPage>;
}
