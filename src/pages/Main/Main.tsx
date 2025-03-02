import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import CardButton from "../../components/CardButton/CardButton";
import Input from "../../components/Input/Input";
import MovieItem from "../../components/MovieItem/MovieItem";
import PanelInput from "../../components/PanelInput/PanelInput";
import TitlePage from "../../components/Title/TitlePage";
import classNames from "classnames";
import styles from "./Main.module.css";
import { ICardMovie, RootInterface } from "../../interfaces/InterfaceMovie";
import { PREFIX } from "../../helpers/PREFIX";
import axios, { AxiosError } from "axios";
import { SearchError } from "../Error/SearchError";

export function Main() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [movies, setMovies] = useState<ICardMovie[] | null>(null);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const getMovie = async () => {
    try {
      if (input) {
        setIsLoading(true);
        const { data } = await axios.get<RootInterface>(`${PREFIX}q=${input}`);
        setMovies(data.description);
        setIsLoading(false);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      setIsLoading(false);
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
            value={input}
            onChange={handleChange}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                getMovie();
              }
            }}
          />
          <Button ref={buttonRef} onClick={getMovie}>
            {"Искать"}
          </Button>
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
                <MovieItem
                  img={
                    el["#IMG_POSTER"]
                      ? el["#IMG_POSTER"]
                      : "/public/NoPictures.svg"
                  }
                  rating={el["#RANK"]}
                  title={el["#TITLE"]}
                  id={el["#IMDB_ID"]}
                />
              </CardButton>
            ))
          ))}
        {isLoading && <div className={classNames(styles.loader)}></div>}
        {error && <>{error}</>}
      </div>
    </>
  );
}
