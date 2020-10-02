import * as TYPES from "../constants/actionType";

export const initialState = {
  staticCategories: ["Popular", "Top Rated", "Upcoming"],
  loading: true,
};

export const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CONFIG:
      return { ...state, base: action.payload };
    case TYPES.GET_GENRES:
      console.log(state);
      return { ...state, ...action.payload };
    case TYPES.SELECTED_MENU:
      return { ...state, selected: action.payload };
    case TYPES.REMOVE_SELECTED_MENU:
      return { ...state, selected: null };
    case TYPES.SET_LOADING:
      return { ...state, loading: true };
    case TYPES.REMOVE_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
