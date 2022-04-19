const express = require('express');

const PizzasController = require('../controllers/PizzasController')

const router = express.Router();

router.get('/', PizzasController.listar)
//router.get('/pizzas/buscar', PizzasController.buscar)
router.get('/pizzas/:id', PizzasController.monstrar)


module.exports = router;