import { useContext } from "react";
import styles from "./Header.module.css";
import classNames from "classnames";
import { UserContext } from "../../context/UserContext";

function Header() {

  const { userNameData, handleLogout } = useContext(UserContext);
  const loggedInUser = userNameData.find((user) => user.isLogined);

  return (
    <div className={classNames(styles.header)}>
      <a className={classNames(styles["favourites-a"])} href="#">
        <img src="/public/Favourites.svg" alt="Избранное" />
      </a>
      <ul className={classNames(styles["header__nav"])}>
        <li className={classNames(styles["header__nav-item"])}>
          <a href="#">Поиск фильмов</a>
        </li>
        <li className={classNames(styles["header__nav-item"])}>
          <a href="#">Мои фильмы</a>
        </li>
        {loggedInUser ? (
          <>
            <li className={classNames(styles["header__nav-item"])}>
              <a href="#">
                {loggedInUser.name}
                <img
                  src="/public/UserRounded.svg"
                  alt="Личный кабинет"
                  className={classNames(styles["header__nav-item-image"])}
                />
              </a>
            </li>
            <li className={classNames(styles["header__nav-item"])}>
              <a href="#" onClick={handleLogout}>Выйти</a>
            </li>
          </>
        ) : (
          <li className={classNames(styles["header__nav-item"])}>
            <a href="#">
              Войти
              <img
                src="/public/Login.svg"
                alt="Войти"
                className={classNames(styles["header__nav-item-image"])}
              />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
