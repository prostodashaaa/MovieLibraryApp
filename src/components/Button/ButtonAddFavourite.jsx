import styles from "./ButtonAddFavourite.module.css";
import classNames from "classnames";

function ButtonAddFavourite() {
  return (
    <button className={classNames(styles["movie-item__description_add"])}>
      <img src="/public/Like.svg" alt="Добавить в избранное" />В избранное
    </button>
  );
}

export default ButtonAddFavourite;
