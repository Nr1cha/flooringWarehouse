const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:3000/";
const { getAllEmployeesModel, updateEmployeeModel, getSingleEmployeeModel, setSingleEmployeeModel, deleteSingleEmployeeModel } = require("../models/employee");

//get a list of all books
async function getAllEmployees(req, res, next) {
    try {
        // throw new Error('Intentional Error'); //testing error
        const EmployeeCollection = await getAllEmployeesModel();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(EmployeeCollection);
    } catch (err) {
        next(err);
    }
    /*#swagger.tags = ['Employee'] */
}


//get a single book
async function getSingleEmployee(req, res, next) {
    try {
        // throw new Error('Intentional Error'); //testing error
        const singleEmployee = await getSingleEmployeeModel(req.params.id);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(singleEmployee);
    } catch (err) {
        next(err);
    }
    /*#swagger.tags = ['Employee'] */
}


//post logic
async function updateEmployee(req, res, next) {
    try {
        /*  #swagger.parameters['body'] = {
        in: 'body',
        schema: {
                firstName: 'firstName',
                lastName: 'lastName',
                emp_id: 97,
                emp_email: 'example@email.com',
                emp_phone: 555555555,
                hire_date: 1,
                job_title: 'manager',
                Department: 'flooring'
        }
    } 
    */
        const payload = req.body;
        const response = await updateEmployeeModel(req.params.id, payload);
        res.setHeader('Content-Type', 'application/json');
        if (response.acknowledged) {
            res.status(201).json({
                updated: true
            });
        } else {
            res.status(500).json(response.err || 'Some error occurred while creating the book entry.');
        }
    } catch (err) {
        next(err)
    }
    /*#swagger.tags = ['Employee'] */
}


// adding put logic
async function setSingleEmployee(req, res, next) {
    try {
        /*  #swagger.parameters['body'] = {
        in: 'body',
        schema: {
                firstName: 'firstName',
                lastName: 'lastName',
                emp_id: 97,
                emp_email: 'example@email.com',
                emp_phone: 555555555,
                hire_date: 1,
                job_title: 'manager',
                Department: 'flooring'
        }
    } 
    */
        const payload = req.body;
        const response = await setSingleEmployeeModel(payload);
        res.setHeader('Content-Type', 'application/json');
        if (response.acknowledged) {
            res.status(204).json({
                updated: true
            });
        } else {
            console.log(response)
            res.status(500).json(response.error || 'Some error occurred while creating the book.');
        }
    } catch (err) {
        next(err)
    }
    /*#swagger.tags = ['Employee'] */
}


// delete logic
async function deleteSingleEmployee(req, res, next) {
    try {
        const singleEmployee = await deleteSingleEmployeeModel(req.params.id);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(singleEmployee);
    }
    catch (err) {
        next(err);
    }
    /*#swagger.tags = ['Employee'] */
}


module.exports = { getAllEmployees, updateEmployee, getSingleEmployee, setSingleEmployee, deleteSingleEmployee };