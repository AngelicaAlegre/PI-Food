import sortMethod, { sortByHealthScore } from "../../services/Sort";
import {
  FILTERBY_NAME,
  FILTERBY_DIET,
  GET_RECIPES,
  GET_DIET,
  SORTBY_AZ,
  SORTBY_HEALTH_SCORE,
} from "../actions";

export const initialStore = {
  recipes: [],
  allRepieces: [],
  filteredRecipes: [],
  details: [],
  diets: [],
};

export const rootReducer = (state = initialStore, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        filteredRecipes: action.payload,
        recipes: action.payload,
      };
    case FILTERBY_NAME:
      const filteredRecipes = state.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredRecipes,
      };
    case GET_DIET:
      return {
        ...state,
        diets: action.payload,
      };
    case FILTERBY_DIET:
      if (action.payload === "DEFAULT") {
        return {
          ...state,
          filteredRecipes: state.recipes,
        };
      } else {
        const filteredByDiets = state.recipes.filter((recipe) =>
          recipe.diets.some((diet) => diet === action.payload)
        );
        return {
          ...state,
          filteredRecipes: filteredByDiets,
        };
      }

    case SORTBY_AZ:
      const sortedRecipesAZ = sortMethod(
        state.filteredRecipes,
        action.payload ? "A-Z" : "Z-A"
      );

      return {
        ...state,
        filteredRecipes: [...sortedRecipesAZ],
      };

    case SORTBY_HEALTH_SCORE:
      const sortedRecipesHealthScore = sortByHealthScore(
        state.filteredRecipes,
        action.payload ? "H19" : "H91"
      );

      return {
        ...state,
        filteredRecipes: sortedRecipesHealthScore,
      };
    default:
      return state;
  }
};

export default rootReducer;
