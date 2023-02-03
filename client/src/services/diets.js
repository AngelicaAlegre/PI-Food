import axios from "axios";

export const getDiets = async() => {
    try{
        const recipe = await axios.get('http://localhost:3001/diet')
        return recipe.data;
    } catch (error) {
        console.log(error);
    }
}