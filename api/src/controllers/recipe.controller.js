const { Recipe, Diet } = require("../db"); //Con los modelos nos comunicamos a la BDD.
const { v4: uuidv4 } = require("uuid");
const getApiInfo = require("../controllers/getApiInfo");
const { getRecipeDBInfo, getRecipeIdDBInfo } = require("../controllers/getDBInfo");

function getRecipes(req, res, next) {
  // req.query.name
  // Pido los datos de la API
  getApiInfo("complexSearch", req.query.name || "")
    .then((dataAPI) => {
      // TENEMOS QUE PEDIR LOS DATOS DE LA BDD
      getRecipeDBInfo(req.query.name || null).then((dataDB) => {
        res.status(200).send([...dataAPI, ...dataDB]);
      });
    })
    .catch((error) => {
      next(error);
    });
}

async function getRecipesById(req, res, next) {
  // req.params.id
  // https://melvingeorge.me/blog/check-if-string-valid-uuid-regex-javascript
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  if (regexExp.test(req.params.id)) {
    getRecipeIdDBInfo(req.params.id)
      .then((dataDB) => {
        res.status(200).send(dataDB);
      })
      .catch((error) => {
        next(error);
      });
  } else {
    getApiInfo(`${req.params.id}/information`)
      .then((dataAPI) => {
        res.status(200).send(dataAPI);
      })
      .catch((error) => {
        next(error);
      });
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
    next(error);
  }
}

module.exports = { getRecipes, getRecipesById, postRecipes };
