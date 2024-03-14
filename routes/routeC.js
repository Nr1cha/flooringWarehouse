const express = require('express');
const router = express.Router();
const {
    getAllBooks,
    updateBook,
    getSingleBook,
    setSingleBook,
    deleteSingleBook
} = require('../controllers/bookController');
const { bookIdSchema,
    validateBookPost
} = require('../middleware/validation');

// GET request for list of all Book items.
router.get('/', getAllBooks);

//GET single book
router.get("/:id", bookIdSchema, getSingleBook);

// POST request for creating Book.
router.post('/:id', validateBookPost, updateBook);

//put route
router.put('/create', validateBookPost, setSingleBook);

//delete route
router.delete('/:id', bookIdSchema, deleteSingleBook);

module.exports = router;