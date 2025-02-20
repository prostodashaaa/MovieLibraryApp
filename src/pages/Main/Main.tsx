import { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import CardButton from "../../components/CardButton/CardButton";
import Input from "../../components/Input/Input";
import MovieItem from "../../components/MovieItem/MovieItem";
import PanelInput from "../../components/PanelInput/PanelInput";
import TitlePage from "../../components/Title/TitlePage";
import { BASE_PAGE_MOVIES } from "../../constants/Constants";
import classNames from "classnames";
import styles from "./Main.module.css";

export function Main() {
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

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
          <Input placeholder={"Введите название"} ref={inputRef} />
          <Button ref={buttonRef}>{"Искать"}</Button>
        </PanelInput>
      </div>
      <div className={classNames(styles["bottom-panel"])}>
        {BASE_PAGE_MOVIES.map((el) => (
          <CardButton key={el.id}>
            <MovieItem img={el.img} rating={el.rating} title={el.title} id={el.id} />
          </CardButton>
        ))}
      </div>
    </>
  );
}
