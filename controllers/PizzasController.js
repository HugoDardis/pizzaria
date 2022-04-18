
 let pizzas = require('../database/pizzas.json');


 module.exports = {
  listar: (req, res) => {
    //let lista = require('../views/pizzas.ejs')
    //let pizzas = require('../database/pizzas.json');
    res.render('pizzas.ejs', {pizzas: pizzas});
  },
  monstrar: (req, res) => {
    //importar/achar id
    let id = req.params.id;

    // mostrar o id buscado
    let position = pizzas.findIndex(i => i.id == id);
    let pizza = pizzas[position];

    // renderizar

    //let pizza = require('../views/pizza.ejs');
    res.render('pizza.ejs', {pizza})
  }
};

//module.exports = controller;

