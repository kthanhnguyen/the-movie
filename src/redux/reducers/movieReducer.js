import * as TYPES from "../constants/actionType";

export const initialState = {
  movies: {},
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_MOVIE:
      state.movies = action.payload;
      return { ...state };
    // case TYPES.FETCH_CAST:
    //   return { ...state, cast: action.payload };
    // case TYPES.FETCH_MOVIE_LOADING:
    //   return { ...state, loading: true };
    // case TYPES.FETCH_MOVIE_FINISHED:
    //   return { ...state, loading: false };
    default:
      return { ...state };
  }
};
