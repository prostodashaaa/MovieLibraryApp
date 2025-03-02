import styles from "./Header.module.css";
import classNames from "classnames";
import { useUser } from "../../context/UserContext";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const { userNameData, handleLogout } = useUser();
  const loggedInUser = userNameData.find((user) => user.isLogined);

  return (
    <div className={classNames(styles.header)}>
      <NavLink className={classNames(styles["favourites-a"])} to={"/favorites"}>
        <img src="/public/Favourites.svg" alt="Избранное" />
      </NavLink>
      <ul className={classNames(styles.header__nav)}>
        <li className={classNames(styles["header__nav-item"])}>
          <NavLink
            className={({ isActive }) =>
              classNames(
                {
                  [styles.active]: isActive,
                },
                styles["header__nav-item_a"]
              )
            }
            to={"/"}
          >
            Поиск фильмов
          </NavLink>
        </li>
        <li className={classNames(styles["header__nav-item"])}>
          <NavLink
            className={({ isActive }) =>
              classNames(
                {
                  [styles.active]: isActive,
                },
                styles["header__nav-item_a"]
              )
            }
            to={"/favorites"}
          >
            Мои фильмы
          </NavLink>
        </li>
        {loggedInUser ? (
          <>
            <li className={classNames(styles["header__nav-item"])}>
              <Link
                className={classNames(styles["header__nav-item_a"])}
                to={"/"}
              >
                {loggedInUser.name}
                <img
                  src="/public/UserRounded.svg"
                  alt="Личный кабинет"
                  className={classNames(styles["header__nav-item-image"])}
                />
              </Link>
            </li>
            <li className={classNames(styles["header__nav-item"])}>
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    {
                      [styles.active]: isActive,
                    },
                    styles["header__nav-item_a"]
                  )
                }
                to={"/login"}
                onClick={handleLogout}
              >
                Выйти
              </NavLink>
            </li>
          </>
        ) : (
          <li className={classNames(styles["header__nav-item"])}>
            <NavLink
              className={({ isActive }) =>
                classNames(
                  {
                    [styles.active]: isActive,
                  },
                  styles["header__nav-item_a"]
                )
              }
              to={"/login"}
            >
              Войти
              <img
                src="/public/Login.svg"
                alt="Войти"
                className={classNames(styles["header__nav-item-image"])}
              />
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
