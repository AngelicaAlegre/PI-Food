// Pedira los datos de la API segun la ruta que se le pase

require('dotenv').config();                 //Configura en dotenv
const { API_KEY } = process.env;            //Solicita el dato a la API_KEY
const axios = require ('axios');

//API info pedira lo datos de la API segun la ruta que se le pase
const getApiInfo = async (url, query = "") => {
    try{
        const baseURL =  `https://api.spoonacular.com/recipes/${url}?query=${query}&apiKey=${API_KEY}&addRecipeInformation=true`;
        return await axios.get(baseURL);
    }catch (error) {
        throw new Error('There was an error with the data', error);
    }
}

module.exports = getApiInfo;