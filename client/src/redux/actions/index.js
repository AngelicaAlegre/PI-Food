import { getRecipesFake } from '../../services/recipes';

//Constantes
export const GET_RECIPES = "GET_RECIPES";












//Acciones
export const setRecipes = () => {
    return async function(dispatch){
        const recipes = await getRecipesFake();
        return dispatch({
            type: GET_RECIPES,
            payload: recipes,
        })
    }
}