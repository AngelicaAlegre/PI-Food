const { Op } = require("sequelize");
const { Recipe, Diet } = require("../db");

const getRecipeDBInfo = async (name) => {
  try {
    if (name) {
     const datos = await Recipe.findAll({
        where: {
          name: {
            [Op.substring]: name,
          },
        },
        include: {
          model: Diet,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
    return datos;
    } else {
        return await Recipe.findAll();
    }
  } catch (error) {
    throw new Error('There was an error with the data', error)
  }
};

const getRecipeIdDBInfo = async (id) => {
    try {
        return await Recipe.findByPk(id);
    } catch (error) {
      throw new Error('There was an error with the data', error)
    }
  };
  

module.exports = { getRecipeDBInfo, getRecipeIdDBInfo };