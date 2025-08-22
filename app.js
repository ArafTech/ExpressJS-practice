import express from 'express';
import ProductController from './src/controllers/products.controller.js';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';

const server = express();

// EJS setup
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'));

// Middleware
server.use(ejsLayouts);
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public')); // public folder for static files

// Instance of ProductController
const productController = new ProductController();

// Routes
server.get('/', productController.getproducts);
server.get('/new', productController.getAddForm);
server.post('/', productController.postAddForm);
server.get('/update-product/:id', productController.getUpdateForm);
server.post('/products/:id/edit', productController.postUpdateForm);
server.get('/products/:id/delete', productController.deleteProduct);

// Start server
server.listen(3400, () => {
  console.log('server is listening on port 3400');
});
