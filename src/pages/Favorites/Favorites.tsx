import TitlePage from "../../components/Title/TitlePage";
import CardButton from "../../components/CardButton/CardButton";
import MovieItem from "../../components/MovieItem/MovieItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import classNames from "classnames";
import styles from "./Favorites.module.css";

export function Favorites() {
  const currentUser = useSelector((state: RootState) =>
    state.user.users.find((user) => user.isLogined)
  );
  
  return (
    <>
      <TitlePage title={"Избранное"} />
      {currentUser?.items.length == 0 ? (
        <div className={classNames(styles.error)}>
          Вы пока не добавили ни одного фильма &#128577;
        </div>
      ) : (
        <div className={classNames(styles["bottom-panel"])}>
          {currentUser?.items.map((el) => (
            <CardButton key={el["#IMDB_ID"]}>
              <MovieItem {...el} />
            </CardButton>
          ))}
        </div>
      )}
    </>
  );
}
