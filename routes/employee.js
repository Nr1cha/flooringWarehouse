const express = require('express');
const router = express.Router();
const {
    getAllEmployees,
    updateEmployee,
    getSingleEmployee,
    setSingleEmployee,
    deleteSingleEmployee
} = require('../controllers/employeeController');
const { employeeIdSchema,
    validateEmployeePost
} = require('../middleware/validation');

// GET request for list of all Employee items.
router.get('/', getAllEmployees);

//GET single employee
router.get("/:id", employeeIdSchema, getSingleEmployee);

// POST request for creating Employee.
router.post('/:id', validateEmployeePost, updateEmployee);

//put route
router.put('/create', validateEmployeePost, setSingleEmployee);

//delete route
router.delete('/:id', employeeIdSchema, deleteSingleEmployee);

module.exports = router;