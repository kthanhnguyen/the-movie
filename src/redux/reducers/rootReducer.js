import { combineReducers } from "redux";
import { configReducer } from "./configReducer";
import { movieReducer } from "./movieReducer";

const rootReducer = combineReducers({
  geral: configReducer,
  movies: movieReducer,
});

export default rootReducer;
