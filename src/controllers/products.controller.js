import ProductModel from '../models/product.model.js';

export default class ProductController {
    getproducts(req, res) {
        const products = ProductModel.get();
        res.render('products', { products, lastVisit: new Date().toLocaleString() });
    }
}
