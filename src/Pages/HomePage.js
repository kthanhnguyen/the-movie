import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../redux/action/index";

import MovieItem from "../Components/MovieItem";

export default function HomePage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);

  useEffect(() => {
    dispatch(action.getMovie());
  }, [dispatch]);

  console.log(movies);

  const renderMovies = () => {
    if (movies.length > 0) {
      return movies.results.map((item) => {
        console.log(item);
        return <MovieItem movie={item} />;
      });
    }
  };

  return (
    <div>
      <h1>HomePage</h1>
      {renderMovies()}
    </div>
  );
}
