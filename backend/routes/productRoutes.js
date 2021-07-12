const express = require('express');
const router = express.Router();
const { getProducts, getProductById, addProduct, deleteProduct, updateProduct } = require('../controllers/productController');
const validateProduct = require('../middlewares/validateProduct');

// @desc    GET all products from db
// @route   GET /api/products
// @access  Public
router.get('/', getProducts);

// @desc    GET all products by id from db
// @route   GET /api/products/id
// @access  Public
router.get('/:id', getProductById);

// @desc    CREATE products
// @route   POST /api/addProducts
// @access  Public
router.post('/', validateProduct, addProduct);

// @desc    DELETE products
// @route   DELETE /api/products/id
// @access  Public
router.delete('/:id', deleteProduct);

// @desc    UPDATE products
// @route   PUT /api/products/id
// @access  Public
router.put('/:id', validateProduct, updateProduct);

module.exports = router;
