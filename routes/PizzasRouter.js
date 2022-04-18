const express = require('express');

const PizzasController = require('../controllers/PizzasController')

const router = express.Router();

router.get('/', PizzasController.listar)
router.get('/pizzas/:id', PizzasController.monstrar)
//router.get('/pizzas/buscar', PizzasController.buscar)

module.exports = router;