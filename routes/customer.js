const express = require('express');
const router = express.Router();
const {
    getAllCustomers,
    updateCustomer,
    getSingleCustomer,
    setSingleCustomer,
    deleteSingleCustomer
} = require('../controllers/customerController');
const { customerIdSchema,
    validateCustomerPost
} = require('../middleware/validation');

// GET request for list of all Member items.
router.get('/', getAllCustomers);

//GET single member
router.get("/:id", customerIdSchema, getSingleCustomer);

// POST request for creating Member.
router.post('/:id', validateCustomerPost, updateCustomer);

//put route
router.put('/create', validateCustomerPost, setSingleCustomer);

//delete route
router.delete('/:id', customerIdSchema, deleteSingleCustomer);

module.exports = router;