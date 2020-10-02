import * as TYPES from "../constants/actionType";
import tmdbAPI from "../../api/tmdb";

// When app inits
export const init = () => async (dispatch) => {
  dispatch({ type: TYPES.SET_LOADING });
  await dispatch(getConfig());
  await dispatch(getGenres());
  dispatch({ type: TYPES.REMOVE_LOADING });
};

// Action Creator to get the config object from the API
export const getConfig = () => async (dispatch) => {
  const res = await tmdbAPI.get("/configuration");
  dispatch({
    type: TYPES.GET_CONFIG,
    payload: res.data,
  });
};

// Get genres from API
export const getGenres = () => async (dispatch) => {
  const res = await tmdbAPI.get("/genre/movie/list");
  dispatch({
    type: TYPES.GET_GENRES,
    payload: res.data,
  });
};

// Set the current selected menu (discover or genre), if is valid
export const setSelectedMenu = (name) => (dispatch, getState) => {
  const { staticCategories, genres } = getState().geral;
  if (!name) {
    dispatch({ type: TYPES.REMOVE_SELECTED_MENU });
  } else if (
    staticCategories.find((category) => category === name) ||
    genres.find((genre) => genre.name === name)
  ) {
    dispatch({
      type: TYPES.SELECTED_MENU,
      payload: name,
    });
  }
};

// Get movies discover
export const getMoviesDiscover = (name, page) => async (dispatch, getState) => {
  const { selected } = getState().geral;
  if (!selected) {
    return;
  }
  try {
    dispatch({ type: TYPES.FETCH_MOVIES_LOADING });
    const res = await tmdbAPI.get(`/movie/${name}`, {
      params: {
        page,
      },
    });
    await dispatch({
      type: TYPES.FETCH_MOVIES_DISCOVER,
      payload: res.data,
    });
    dispatch({ type: TYPES.FETCH_MOVIES_FINISHED });
  } catch (err) {
    dispatch({ type: TYPES.INSERT_ERROR, payload: err.response });
  }
};

// Set loading to true for next render
export const clearMovies = () => {
  return {
    type: TYPES.FETCH_MOVIES_LOADING,
  };
};
