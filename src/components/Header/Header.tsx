import styles from "./Header.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { userActions } from "../../store/user.slice";
import { searchActions } from "../../store/search.slice";

function Header() {
  const users = useSelector((s: RootState) => s.user.users);
  const dispatch = useDispatch<AppDispatch>();
  const loggedInUser = users.find((user) => user.isLogined);

  const handleLogout = () => {
    dispatch(userActions.logout(loggedInUser?.name));
    dispatch(searchActions.setQuery(""));
    dispatch(searchActions.setMovies(null));
  };

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
                styles["header__nav-item_a"],
                styles["header__nav-item_a-flex"]
              )
            }
            to={"/favorites"}
          >
            Мои фильмы
            {loggedInUser && loggedInUser.items.length > 0 && (
              <div className={classNames(styles["header__nav-item-count"])}>
                {loggedInUser.items.length}
              </div>
            )}
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
