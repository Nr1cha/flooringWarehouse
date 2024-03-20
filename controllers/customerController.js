const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:3000/";
const { getAllCustomersModel, updateCustomerModel, getSingleCustomerModel, setSingleCustomerModel, deleteSingleCustomerModel } = require("../models/customer");

//get a list of all books
async function getAllCustomers(req, res, next) {
    try {
        // throw new Error('Intentional Error'); //testing error
        const CustomerCollection = await getAllCustomersModel();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(CustomerCollection);
    } catch (err) {
        next(err);
    }
}

//get a single book
async function getSingleCustomer(req, res, next) {
    try {
        // throw new Error('Intentional Error'); //testing error
        const singleCustomer = await getSingleCustomerModel(req.params.id);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(singleCustomer);
    } catch (err) {
        next(err);
    }
}

//post logic
async function updateCustomer(req, res, next) {
    try {
        /*  #swagger.parameters['body'] = {
        in: 'body',
        schema: {
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'example@email.com',
                phoneNumber: 555555555
        }
    } 
    */
        const payload = req.body;
        const response = await updateCustomerModel(req.params.id, payload);
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
}

// adding put logic
async function setSingleCustomer(req, res, next) {
    try {
        /*  #swagger.parameters['body'] = {
        in: 'body',
        schema: {
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'example@email.com',
                phoneNumber: 555555555
        }
    } 
    */
        const payload = req.body;
        const response = await setSingleCustomerModel(payload);
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
}

// delete logic
async function deleteSingleCustomer(req, res, next) {
    try {
        const singleCustomer = await deleteSingleCustomerModel(req.params.id);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(singleCustomer);
    }
    catch (err) {
        next(err);
    }
}

module.exports = { getAllCustomers, updateCustomer, getSingleCustomer, setSingleCustomer, deleteSingleCustomer };