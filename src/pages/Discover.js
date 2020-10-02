import React, { useEffect } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import {
  setSelectedMenu,
  getMoviesDiscover,
  clearMovies,
} from "../redux/action/index";
import MovieItem from "../components/MovieItem";

// Hook to fetch the movies, will be called everytime the route or the filters from the state change
function useFetchMoviesDiscover(name, getMoviesDiscover, params, clearMovies) {
  const query = name.replace(/\s+/g, "_").toLowerCase();
  useEffect(() => {
    // scroll.scrollToTop({
    //   smooth: true,
    // });
    getMoviesDiscover(query, params.page);
    return () => clearMovies();
  }, [query, params.page]);
}

const Discover = ({
  geral,
  match,
  location,
  setSelectedMenu,
  getMoviesDiscover,
  clearMovies,
  movies,
}) => {
  console.log(movies);
  const params = queryString.parse(location.search);
  // const { secure_base_url } = geral.base.images;

  // Send url to setSelected Action Creator, it will check if is valid
  useEffect(() => {
    setSelectedMenu(match.params.name);
    // Clean up to remove selected menu from state
    return () => setSelectedMenu();
  }, [match.params.name]);

  // Call hook to fetch movies discover, pass in the url query
  useFetchMoviesDiscover(
    match.params.name,
    getMoviesDiscover,
    params,
    clearMovies
  );

  const renderMovies = (movies) => {
    if (movies) {
      return movies.results.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ));
    }
  };

  return (
    <div className="movie-wrapper">
      bbbbbbbbbbbbbb
      {renderMovies(movies)}
    </div>
  );
};

// Map State to Component Props
const mapStateToProps = ({ geral, movies }) => {
  return { geral, movies };
};

export default connect(mapStateToProps, {
  setSelectedMenu,
  getMoviesDiscover,
  clearMovies,
})(Discover);
