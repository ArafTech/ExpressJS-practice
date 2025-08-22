import express from 'express';
import ProductController from './src/controllers/products.controller.js';
import path from 'path';
// const ejsLayouts = require('express-ejs-Layouts');

const server = express();

server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'))

// server.use(ejsLayouts);

server.use(express.static('src/views'))

//instance of ProductController
const productController = new ProductController();

server.get('/', productController.getproducts);

server.listen(3400,()=>{
  console.log('server is listening on port 3400')
});