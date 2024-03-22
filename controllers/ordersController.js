const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:3000/";
const { getAllOrdersModel, updateOrderModel, getSingleOrderModel, setSingleOrderModel, deleteSingleOrderModel } = require("../models/orders");

//get a list of all books
async function getAllOrders(req, res, next) {
    try {
        // throw new Error('Intentional Error'); //testing error
        const OrderCollection = await getAllOrdersModel();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(OrderCollection);
    } catch (err) {
        next(err);
    }
    /*#swagger.tags = ['Order'] */
}


//get a single book
async function getSingleOrder(req, res, next) {
    try {
        // throw new Error('Intentional Error'); //testing error
        const singleOrder = await getSingleOrderModel(req.params.id);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(singleOrder);
    } catch (err) {
        next(err);
    }
    /*#swagger.tags = ['Order'] */
}


//post logic
async function updateOrder(req, res, next) {
    try {
        /*  #swagger.parameters['body'] = {
        in: 'body',
        schema: {
                product: 'productName',
                quantity: 12,
                pricePerSquareFoot: 97,
                totalCost: 79,
                paymentMethod: 'card'
        }
    } 
    */
        const payload = req.body;
        const response = await updateOrderModel(req.params.id, payload);
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
    /*#swagger.tags = ['Order'] */
}

// adding put logic
async function setSingleOrder(req, res, next) {
    try {
        /*  #swagger.parameters['body'] = {
        in: 'body',
        schema: {
                product: 'productName',
                quantity: 12,
                pricePerSquareFoot: 97,
                totalCost: 79,
                paymentMethod: 'card'
        }
    } 
    */
        const payload = req.body;
        const response = await setSingleOrderModel(payload);
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
    /*#swagger.tags = ['Order'] */
}


// delete logic
async function deleteSingleOrder(req, res, next) {
    try {
        const singleOrder = await deleteSingleOrderModel(req.params.id);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(singleOrder);
    }
    catch (err) {
        next(err);
    }
    /*#swagger.tags = ['Order'] */
}

module.exports = { getAllOrders, updateOrder, getSingleOrder, setSingleOrder, deleteSingleOrder };