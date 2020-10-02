import * as TYPES from "../constants/actionType";

export const initialState = {
  movies: {},
  movieGenre: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_MOVIE:
      state.movies = action.payload;
      return { ...state };
    case TYPES.FETCH_MOVIES_GENRE:
      state.movieGenre = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
