import ButtonAddFavourite from "../Button/ButtonAddFavourite";
import "./MovieItem.css";

function MovieItem({ img, rating, title }) {
  return (
    <div className="movie-item">
      <div className="movie-item__image">
        <img src={img} alt="Постер" />
        <div className="movie-item__rating">
          <div className="movie-item__rating_image">
            <img src="/public/Star.svg" alt="Рейтинг" />
          </div>
          <div className="movie-item__rating_count">{rating}</div>
        </div>
      </div>
      <div className="movie-item__description">
        <div className="movie-item__description_title">{title}</div>
        <ButtonAddFavourite />
      </div>
    </div>
  );
}

export default MovieItem;
