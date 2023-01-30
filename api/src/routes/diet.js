const { getDiets } = require("../controllers/diet.controller");

const express= require("express");
const router = new express.Router();

router.get('/', getDiets);

module.exports = router;