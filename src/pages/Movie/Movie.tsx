import classNames from "classnames";
import styles from "./Movie.module.css";
import { useLoaderData } from "react-router-dom";
import { IExtendedCardMovie } from "../../interfaces/InterfaceMovie";

export function Movie() {
  const data = useLoaderData();
  const movie = data.short as IExtendedCardMovie;

  return (
    <>
      <div>Карточка фильма - {movie.genre}</div>
    </>
  );
}
