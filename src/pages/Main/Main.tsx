import { ChangeEvent, KeyboardEvent, useRef } from "react";
import Button from "../../components/Button/Button";
import CardButton from "../../components/CardButton/CardButton";
import Input from "../../components/Input/Input";
import MovieItem from "../../components/MovieItem/MovieItem";
import PanelInput from "../../components/PanelInput/PanelInput";
import TitlePage from "../../components/Title/TitlePage";
import classNames from "classnames";
import styles from "./Main.module.css";
import { RootInterface } from "../../interfaces/InterfaceMovie";
import { PREFIX } from "../../helpers/PREFIX";
import axios, { AxiosError } from "axios";
import { SearchError } from "../Error/SearchError";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { searchActions } from "../../store/search.slice";
import Loader from "../../components/Loader/Loader";

export function Main() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { query, movies, isLoading, error } = useSelector(
    (s: RootState) => s.search
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.setQuery(e.target.value));
  };

  const getMovie = async () => {
    try {
      if (query) {
        dispatch(searchActions.setLoading(true));
        dispatch(searchActions.setError(null));
        dispatch(searchActions.setMovies(null));
        dispatch(searchActions.setQuery(""));
        const { data } = await axios.get<RootInterface>(`${PREFIX}q=${query}`);
        dispatch(searchActions.setMovies(data.description));
        dispatch(searchActions.setLoading(false));
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(searchActions.setError(e.message));
        dispatch(searchActions.setMovies([]));
      }
      dispatch(searchActions.setLoading(false));
      return;
    }
  };

  return (
    <>
      <div className={classNames(styles["top-panel"])}>
        <TitlePage
          title={"Поиск"}
          text={
            "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
          }
        />
        <PanelInput>
          <Input
            placeholder={"Введите название"}
            ref={inputRef}
            value={query}
            onChange={handleChange}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                getMovie();
              }
            }}
          />
          <Button onClick={getMovie}>{"Искать"}</Button>
        </PanelInput>
      </div>
      <div className={classNames(styles["bottom-panel"])}>
        {!isLoading &&
          !error &&
          (movies?.length == 0 ? (
            <SearchError />
          ) : (
            movies?.map((el) => (
              <CardButton key={el["#IMDB_ID"]}>
                <MovieItem {...el} />
              </CardButton>
            ))
          ))}
        {isLoading && <Loader/>}
        {error && <>{error}</>}
      </div>
    </>
  );
}
