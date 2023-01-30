const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");

async function getRecipes(req, res, next) {
  // req.query.name
  try {
    if (req.query.name) {
      const recipesDB = await Recipe.findAll({
        // Pido todas las recetas que tengo en la base de datos.
        where: {
          name: {
            [Op.substring]: req.query.name,
          },
        },
        include: {
          model: Diet,
          attributes: ['name', 'id'],
          through: {
            attributes: [],
          }
        }
      });
      res.status(200).json(recipesDB);
      await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b65d2afc4fb44f06a93d9a89c1793635&addRecipeInformation=true&number=100`)
    } else {
      const recipesDB2 = await Recipe.findAll({
        include: {
          model: Diet,
          attributes: ['name', 'id'],
          through: {
            attributes: [],
          }
        }
      });
      res.status(200).json(recipesDB2);
      await axios.get( `https://api.spoonacular.com/recipes/complexSearch?apiKey=b65d2afc4fb44f06a93d9a89c1793635&addRecipeInformation=true&number=100`)
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

async function getRecipesById(req, res, next) {
  // req.params.id
  try {
    if (req.params.id.length > 10) {
      const recipesID = await Recipe.findByPk(req.params.id, {
        include: [
          {
            model: Diet,
            atributes: ["name"],
          },
        ],
      });
      res.status(200).json(recipesID);
    } else {
      await axios.get(
        `https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=b65d2afc4fb44f06a93d9a89c1793635`
      );
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function postRecipes(req, res, next) {
  // Agarramos todos las propiedades que nos pasan del frontEnd
  const { name, dishSummary, healthScore, steps, typeDiet } = req.body;
  try {
    // Creamos una nueva receta
    const recipeCreation = await Recipe.create({
      id: uuidv4(),
      name,
      dishSummary,
      healthScore,
      steps,
    });
    // Traer todas las dietas que coincidan con el nombre
    const createDiet = await Diet.findAll({
      where: {
        name: typeDiet,
      },
    });

    // A la receta que creamos, le añadimos la dieta creada
    await recipeCreation.addDiets(createDiet);
    res.status(200).json(recipeCreation);
    // recipeCreation.addDiets(createRecipe[0]);
  } catch (error) {
    res.status(400).json({ error: error });
  }
}

module.exports = { getRecipes, getRecipesById, postRecipes };
