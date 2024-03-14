const express = require('express');
const router = express.Router();
const {
    getAllMembers,
    updateMember,
    getSingleMember,
    setSingleMember,
    deleteSingleMember
} = require('../controllers/memberController');
const { memberIdSchema,
    validateMemberPost
} = require('../middleware/validation');

// GET request for list of all Member items.
router.get('/', getAllMembers);

//GET single member
router.get("/:id", memberIdSchema, getSingleMember);

// POST request for creating Member.
router.post('/:id', validateMemberPost, updateMember);

//put route
router.put('/create', validateMemberPost, setSingleMember);

//delete route
router.delete('/:id', memberIdSchema, deleteSingleMember);

module.exports = router;
