const express = require('express');
const path = require('path');

const PizzasRouter = require('./routes/PizzasRouter')
//const PizzasController = require('./routes/PizzasController')
const app = express();

app.set('view engine','ejs');


app.use(express.static(path.join(__dirname, 'public')));


//app.get('/', (req, res)=>{res.send("Olá, visitante!");});
//const PizzasRouter = require('./routes/PizzasRouter')

app.use('/', PizzasRouter)

app.listen(3000, ()=>{console.log("Servidor rodando na porta 3000")});