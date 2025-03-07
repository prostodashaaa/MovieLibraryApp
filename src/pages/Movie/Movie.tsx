import classNames from "classnames";
import styles from "./Movie.module.css";
import { useLoaderData } from "react-router-dom";
import { IExtendedCardMovie } from "../../interfaces/InterfaceMovie";
import Button from "../../components/Button/Button";
import he from "he";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { userActions } from "../../store/user.slice";
import { MouseEvent } from "react";

export function Movie() {
  const data = useLoaderData();
  const movie = data.short as IExtendedCardMovie;
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector((state: RootState) =>
    state.user.users.find((user) => user.isLogined)
  );
  const currentMovie = useSelector((state: RootState) =>
    state.search.movies?.find((i) => i["#IMDB_ID"] == data.imdbId)
  );

  const isFavourite = currentUser?.items.some(
    (item) => item["#IMDB_ID"] === data.imdbId
  );

  const editFavourites = (e: MouseEvent) => {
    e.preventDefault();
    if (currentUser?.name && currentMovie) {
      dispatch(
        userActions.editFavourites({
          movie: {
            ...currentMovie,
          },
          name: currentUser.name,
        })
      );
    }
  };

  const parseDuration = (duration: string) => {
    const haveHour = duration.indexOf("H");
    const haveMinuts = duration.indexOf("M");

    if (haveHour == -1) {
      const minuts = Number(duration.slice(2, haveMinuts));
      return `${minuts} мин`;
    }
    const hour = Number(duration.slice(2, haveHour));
    const minuts = Number(duration.slice(haveHour + 1, haveMinuts));
    return `${hour * 60 + minuts} мин`;
  };

  return (
    <>
      <div className={classNames(styles.movie__section)}>
        <div className={classNames(styles.movie__header)}>
          <div className={classNames(styles.movie__navigate)}>
            Поиск фильмов
          </div>
          <div className={classNames(styles.movie__name)}>
            {he.decode(movie.name)}
          </div>
        </div>
        <div className={classNames(styles.movie__description)}>
          <div className={classNames(styles.movie__image)}>
            <img
              src={movie.image ? movie.image : "/public/NoPictures.svg"}
              alt="Обложка фильма"
            />
          </div>
          <div className={classNames(styles.movie__info)}>
            {movie.description && (
              <div className={classNames(styles.movie__text)}>
                {he.decode(movie.description)}
              </div>
            )}
            <div className={classNames(styles.movie__action)}>
              {movie.aggregateRating && (
                <div className={classNames(styles.movie__rating)}>
                  <div className={classNames(styles.rating_image)}>
                    <img src="/public/Star.svg" alt="Рейтинг" />
                  </div>
                  <div className={classNames(styles.rating_text)}>
                    {movie.aggregateRating.ratingValue}
                  </div>
                </div>
              )}
              {!isFavourite ? (
                <Button appearence="favourite" onClick={editFavourites}>
                  <img src="/public/Like.svg" alt="Добавить в избранное" />В
                  избранное
                </Button>
              ) : (
                <Button appearence="done-favourite" onClick={editFavourites}>
                  <img src="/public/Favourites.svg" alt="В избранном" />В
                  избранном
                </Button>
              )}
            </div>
            <div className={classNames(styles.movie__item)}>
              <div className={classNames(styles.item__title)}>Тип</div>
              <div className={classNames(styles.item__text)}>
                {he.decode(movie["@type"])}
              </div>
            </div>
            {movie.datePublished && (
              <div className={classNames(styles.movie__item)}>
                <div className={classNames(styles.item__title)}>
                  Дата выхода
                </div>
                <div className={classNames(styles.item__text)}>
                  {movie.datePublished}
                </div>
              </div>
            )}
            <div className={classNames(styles.movie__item)}>
              <div className={classNames(styles.item__title)}>Длительность</div>
              <div className={classNames(styles.item__text)}>
                {movie.duration ? parseDuration(movie.duration) : "-"}
              </div>
            </div>
            <div className={classNames(styles.movie__item)}>
              <div className={classNames(styles.item__title)}>Жанр</div>
              <div className={classNames(styles.item__text)}>
                {he.decode(movie.genre.join(", "))}
              </div>
            </div>
          </div>
        </div>
        {movie.review && (
          <div className={classNames(styles.movie__review)}>
            <div className={classNames(styles.review__title)}>Отзывы</div>
            <div className={classNames(styles.review__item)}>
              <div className={classNames(styles.review__item_title)}>
                <div className={classNames(styles.review__item_name)}>
                  {he.decode(movie.review.name)}
                </div>
                <div className={classNames(styles.review__item_date)}>
                  {movie.review.dateCreated}
                </div>
              </div>
              <div className={classNames(styles.review__item_text)}>
                {he.decode(movie.review.reviewBody)}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
