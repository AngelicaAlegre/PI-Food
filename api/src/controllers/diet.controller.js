const { Diet } = require("../db")
const { diets } = require("../constant/diets")

async function getDiets(req, res, next) {
    try {                                   // Sirve para operaciones asincronicas - Lo que va en try es el codigo a ejecutar.
        diets.forEach(item => {             // Iterar sobre cada item del array de 'diets'.
            Diet.findOrCreate({             // Precargamos los datos en la tabla Diet, si ya existen, no hacemos nada.
                where: {name:item.name}     // Comparamos el atributo name, con el item.name del forEach.
            })
        })
        const foods = await Diet.findAll()  // Agarramos todos los items de la tabla Diet de la base de datos.
        res.status(200).send(foods);                 // Los enviamos hacia el front.

    }catch (error){                         // En caso de ocurrir algun error, entro aca.
        next(error)                         // El error lo pasamos por next.
    }
};

module.exports = { getDiets };