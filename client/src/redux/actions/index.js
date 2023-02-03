import { getRecipesFake } from "../../services/recipes";
import { getDiets } from "../../services/diets";

//Constantes
export const GET_RECIPES = "GET_RECIPES";
export const GET_DIET = "GET_DIET";
export const SORTBY_AZ = "ORDERBY_AZ";
export const ORDERBY_ZA = "ORDERBY_ZA";
export const SORTBY_HEALTH_SCORE = "ORDERBY_HEALTH_SCORE";
export const FILTERBY_DIET = "FILTERBY_DIET";
export const FILTERBY_NAME = "FILTERBY_NAME";

//Acciones
export const setRecipes = () => {
  return async function (dispatch) {
    const recipes = await getRecipesFake();
    return dispatch({
      type: GET_RECIPES,
      payload: recipes,
    });
  };
};

export const filterByName = (name) => {
  return async function (dispatch) {
    return dispatch({
      type: FILTERBY_NAME,
      payload: name,
    });
  };
};

export const filterByDiet = (diet) => {
  return async function (dispatch) {
    return dispatch({
      type: FILTERBY_DIET,
      payload: diet,
    });
  };
};

export const setDiets = () => {
  return async function (dispatch) {
    const diet = await getDiets();
    return dispatch({
      type: GET_DIET,
      payload: diet,
    });
  };
};
