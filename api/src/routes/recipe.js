const { getRecipes, postRecipes, getRecipesById } = require("../controllers/recipe.controller");

const express= require("express");
const router = new express.Router();

router.get('/', getRecipes);
router.get('/:id', getRecipesById);
router.post('/', postRecipes);

module.exports = router;
