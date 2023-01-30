const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipe = require('./recipe');
const diet = require('./diet')

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/diet', diet);
router.use('/recipe', recipe);

module.exports = router;
