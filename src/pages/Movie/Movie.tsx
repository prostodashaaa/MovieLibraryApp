import classNames from "classnames";
import styles from "./Movie.module.css";
import { useParams } from "react-router-dom";

export function Movie() {
  const { id } = useParams();

  return <div>Карточка фильма - {id}</div>;
}