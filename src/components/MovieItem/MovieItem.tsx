import Button from "../Button/Button";
import styles from "./MovieItem.module.css";
import classNames from "classnames";
import { MovieItemProps } from "./MovieItem.props";
import { NavLink } from "react-router-dom";

function MovieItem({ id, img, rating, title }: MovieItemProps) {
  return (
    <NavLink to={`/movie/${id}`} className={classNames(styles["movie-item"])}>
      <div className={classNames(styles["movie-item__image"])}>
        <img src={img} alt="Постер" />
        <div className={classNames(styles["movie-item__rating"])}>
          <div className={classNames(styles["movie-item__rating_image"])}>
            <img src="/public/Star.svg" alt="Рейтинг" />
          </div>
          <div className={classNames(styles["movie-item__rating_count"])}>
            {rating}
          </div>
        </div>
      </div>
      <div className={classNames(styles["movie-item__description"])}>
        <div className={classNames(styles["movie-item__description_title"])}>
          {title}
        </div>
        <Button appearence="favourite">
          <img src="/public/Like.svg" alt="Добавить в избранное" />В избранное
        </Button>
      </div>
    </NavLink>
  );
}

export default MovieItem;
