import "./Header.css";

function Header() {

  return (
    <div className="header">
      <a className="favourites-a" href="#">
        <img src="/public/Favourites.svg" alt="Избранное" />
      </a>
      <ul className="header__nav">
        <li className="header__nav-item">
          <a href="#">Поиск фильмов</a>
        </li>
        <li className="header__nav-item">
          <a href="#">Мои фильмы</a>
        </li>
        <li className="header__nav-item">
          <a href="#">Войти <img src="/public/Login.svg" alt="Войти" className="header__nav-item-image" /></a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
