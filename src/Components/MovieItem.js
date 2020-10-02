import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MovieItem({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie__item">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <p className="movie-name">{movie.title}</p>
        <div className="movie-rating">
          <Rating
            className="rating-star"
            initialRating={movie.vote_average / 2}
            emptySymbol={<FontAwesomeIcon icon={fasStar} size="lg" />}
            fullSymbol={<FontAwesomeIcon icon={faStar} size="lg" />}
            readonly
          />
          <div className="movie-rating__tooltip">
            {movie.vote_average} average rating on {movie.vote_count}
          </div>
        </div>
      </div>
    </Link>
  );
}
