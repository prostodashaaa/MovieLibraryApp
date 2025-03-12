import Button from "../Button/Button";
import styles from "./MovieItem.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { MouseEvent } from "react";
import { ICardMovie } from "../../interfaces/InterfaceMovie";
import { userActions } from "../../store/user.slice";

function MovieItem(params: ICardMovie) {
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector((state: RootState) =>
    state.user.users.find((user) => user.isLogined)
  );

  const isFavourite = currentUser?.items.some(
    (item) => item["#IMDB_ID"] === params["#IMDB_ID"]
  );

  const editFavourites = (e: MouseEvent) => {
    e.preventDefault();
    if (currentUser?.name) {
      dispatch(
        userActions.editFavourites({ movie: params, name: currentUser.name })
      );
    }
  };

  return (
    <NavLink
      to={`/movie/${params["#IMDB_ID"]}`}
      className={classNames(styles["movie-item"])}
    >
      <div className={classNames(styles["movie-item__image"])}>
        <img
          src={
            params["#IMG_POSTER"]
              ? params["#IMG_POSTER"]
              : "/public/NoPictures.svg"
          }
          alt="Постер"
        />
        <div className={classNames(styles["movie-item__rating"])}>
          <div className={classNames(styles["movie-item__rating_image"])}>
            <img src="/public/Star.svg" alt="Рейтинг" />
          </div>
          <div className={classNames(styles["movie-item__rating_count"])}>
            {params["#RANK"]}
          </div>
        </div>
      </div>
      <div className={classNames(styles["movie-item__description"])}>
        <div className={classNames(styles["movie-item__description_title"])}>
          {params["#TITLE"]}
        </div>
        {!isFavourite ? (
          <Button appearence="favourite" onClick={editFavourites}>
            <img src="/public/Like.svg" alt="Добавить в избранное" />В избранное
          </Button>
        ) : (
          <Button appearence="done-favourite" onClick={editFavourites}>
            <img src="/public/Favourites.svg" alt="В избранном" />В избранном
          </Button>
        )}
      </div>
    </NavLink>
  );
}

export default MovieItem;
