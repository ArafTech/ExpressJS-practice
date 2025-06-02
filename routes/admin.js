const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const router = express.Router();

// GET /admin/add-product
router.get('/add-product', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// POST /admin/add-product
router.post('/add-product', (req, res) => {
  console.log('Form data:', req.body);
  res.send('<b>Product added successfully!</b>');
});

module.exports = router;
