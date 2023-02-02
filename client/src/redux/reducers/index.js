import { GET_RECIPES } from "../actions";

export const initialStore = {
  recipes: [],
  allRepieces: [],
  details: [],
  diets: [],
};

export const rootReducer = (state = initialStore, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;