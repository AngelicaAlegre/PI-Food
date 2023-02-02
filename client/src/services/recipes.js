import axios from "axios";
import dataAPI from "../helpers/dataAPI";

export const getRecipes = async() => {
    try {
        const information = await axios.get('http://localhost:3001/recipe')
            return information.data;
    } catch (error) {
        console.log(error)
    }
};

export const getRecipesFake = async() => {
    try {
        const information =  dataAPI;
            return information;
    } catch (error) {
        console.log(error)
    }
};

