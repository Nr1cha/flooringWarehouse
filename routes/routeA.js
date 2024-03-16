const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    updateProduct,
    getSingleProduct,
    setSingleProduct,
    deleteSingleProduct
} = require('../controllers/warehouseController');
const { productIdSchema,
    validateProductPost
} = require('../middleware/validation');

// GET request for list of all Member items.
router.get('/', getAllProducts);

//GET single member
router.get("/:id", productIdSchema, getSingleProduct);

// POST request for creating Member.
router.post('/:id', validateProductPost, updateProduct);

//put route
router.put('/create', validateProductPost, setSingleProduct);

//delete route
router.delete('/:id', productIdSchema, deleteSingleProduct);

module.exports = router;
