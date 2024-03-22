const express = require('express');
const router = express.Router();
const {
    getAllOrders,
    updateOrder,
    getSingleOrder,
    setSingleOrder,
    deleteSingleOrder
} = require('../controllers/ordersController');
const { orderIdSchema,
    validateOrderPost
} = require('../middleware/validation');

// GET request for list of all Member items.
router.get('/', getAllOrders);

//GET single member
router.get("/:id", orderIdSchema, getSingleOrder);

// POST request for creating Member.
router.post('/:id', validateOrderPost, updateOrder);

//put route
router.put('/create', validateOrderPost, setSingleOrder);

//delete route
router.delete('/:id', orderIdSchema, deleteSingleOrder);

module.exports = router;