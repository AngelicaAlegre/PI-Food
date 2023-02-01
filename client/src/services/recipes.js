import axios from "axios";
import Home from "../pages/Home";

export const getRecipes = async() => {
    try {
        const information = await axios.get('http://localhost:3001/recipe')
            return information.data;
    } catch (error) {
        console.log(error)
    }
};

export default Home;