import ProductModel from '../models/product.model.js';

export default class ProductController {
    getproducts = (req, res) => {
        const products = ProductModel.get();
        res.render('products', { products, title: 'Home Page', lastVisit: new Date().toLocaleString() });
    };

    getAddForm = (req, res) => {
        res.render('new-product', { title: 'Add Product', lastVisit: new Date().toLocaleString() });
    };

    postAddForm = (req, res) => {
        console.log(req.body);
        const { name, desc, price, imageUrl } = req.body;
        ProductModel.add({ name, desc, price, imageUrl });
        const products = ProductModel.get();
        res.render('products', { products, title: 'Home Page', lastVisit: new Date().toLocaleString() });
    };

    getUpdateForm = (req, res) => {
        const id = parseInt(req.params.id);
        const product = ProductModel.get().find(p => p.id === id);
        if (product) {
            res.render('update-product', { product, title: 'Edit Product', lastVisit: new Date().toLocaleString() });
        } else {
            res.status(404).send('Product not found');
        }
    };
    postUpdateForm = (req, res) => {
        const id = parseInt(req.params.id);
        const { name, desc, price, imageUrl } = req.body;
        ProductModel.update(id, { name, desc, price, imageUrl });
        const products = ProductModel.get();
        res.render('products', { products, title: 'Home Page', lastVisit: new Date().toLocaleString() });
    };

    deleteProduct = (req, res) => {
        const id = parseInt(req.params.id);
        ProductModel.delete(id);
        const products = ProductModel.get();
        res.render('products', { products, title: 'Home Page', lastVisit: new Date().toLocaleString() });
    };

}
