import * as TYPES from "../constants/actionType";
import tmdbAPI from "../../api/tmdb";
// import axios from "axios";

export const getMovie = () => async (dispatch) => {
  const res = await tmdbAPI.get("/movie/popular");
  dispatch({
    type: TYPES.FETCH_MOVIE,
    payload: res.data,
  });
};

// export const getMovie = () => {
//   return (dispatch) => {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/movie/popular?api_key=2e5c00079d20c7511b6f38bb59a18b8a&language=en-US&page=1"
//       )
//       .then((res) => {
//         dispatch({
//           type: TYPES.FETCH_MOVIE,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
