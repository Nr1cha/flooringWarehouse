const express = require('express');
const router = express.Router();
const {
    getAllFloorings,
    updateFlooring,
    getSingleFlooring,
    setSingleFlooring,
    deleteSingleFlooring
} = require('../controllers/warehouseController');
const { flooringIdSchema,
    validateFlooringPost
} = require('../middleware/validation');

// GET request for list of all Member items.
router.get('/', getAllFloorings);

//GET single member
router.get("/:id", flooringIdSchema, getSingleFlooring);

// POST request for creating Member.
router.post('/:id', validateFlooringPost, updateFlooring);

//put route
router.put('/create', validateFlooringPost, setSingleFlooring);

//delete route
router.delete('/:id', flooringIdSchema, deleteSingleFlooring);

module.exports = router;
