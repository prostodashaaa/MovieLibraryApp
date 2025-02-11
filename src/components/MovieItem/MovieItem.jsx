import ButtonAddFavourite from "../Button/ButtonAddFavourite";
import styles from "./MovieItem.module.css";
import classNames from "classnames";

function MovieItem({ img, rating, title }) {
  return (
    <div className={classNames(styles["movie-item"])}>
      <div className={classNames(styles["movie-item__image"])}>
        <img src={img} alt="Постер" />
        <div className={classNames(styles["movie-item__rating"])}>
          <div className={classNames(styles["movie-item__rating_image"])}>
            <img src="/public/Star.svg" alt="Рейтинг" />
          </div>
          <div className={classNames(styles["movie-item__rating_count"])}>{rating}</div>
        </div>
      </div>
      <div className={classNames(styles["movie-item__description"])}>
        <div className={classNames(styles["movie-item__description_title"])}>{title}</div>
        <ButtonAddFavourite />
      </div>
    </div>
  );
}

export default MovieItem;
