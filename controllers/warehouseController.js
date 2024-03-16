const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:3000/";
const { getAllFlooringsModel, updateFlooringModel, getSingleFlooringModel, setSingleFlooringModel, deleteSingleFlooringModel } = require("../models/flooring");

//get a list of all floorings
async function getAllFloorings(req, res, next) {
    try {
        // throw new Error('Intentional Error'); //testing error
        const flooringCollection = await getAllFlooringsModel();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(flooringCollection);
    } catch (err) {
        next(err);
    }
}

//get a single flooring
async function getSingleFlooring(req, res, next) {
    try {
        // throw new Error('Intentional Error'); //testing error
        const singleFlooring = await getSingleFlooringModel(req.params.id);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(singleFlooring);
    } catch (err) {
        next(err);
    }
}

//post logic
async function updateFlooring(req, res, next) {
    try {
        /*  #swagger.parameters['body'] = {
        in: 'body',
        schema: {
                Name: payload.Name,
                Description: payload.Description,
                Price: payload.Price,
                Category: payload.Category,
                Stock: payload.Stock,
                Manufacturer: payload.Manufacturer,
                date_added: payload.date_added,
                Weight_kg: payload.Weight_kg,
                Product_id: payload.Product_id
        }
    } 
    */
        const payload = req.body;
        const response = await updateFlooringModel(req.params.id, payload);
        res.setHeader('Content-Type', 'application/json');
        if (response.acknowledged) {
            res.status(201).json({
                updated: true
            });
        } else {
            res.status(500).json(response.err || 'Some error occurred while creating the flooring entry.');
        }
    } catch (err) {
        next(err)
    }
}

// adding put logic
async function setSingleFlooring(req, res, next) {
    try {
        /*  #swagger.parameters['body'] = {
        in: 'body',
            schema: {
                Name: payload.Name,
                Description: payload.Description,
                Price: payload.Price,
                Category: payload.Category,
                Stock: payload.Stock,
                Manufacturer: payload.Manufacturer,
                date_added: payload.date_added,
                Weight_kg: payload.Weight_kg,
                Product_id: payload.Product_id
            }
    } 
    */
        const payload = req.body;
        const response = await setSingleFlooringModel(payload);
        res.setHeader('Content-Type', 'application/json');
        if (response.acknowledged) {
            res.status(204).json({
                updated: true
            });
        } else {
            console.log(response)
            res.status(500).json(response.error || 'Some error occurred while creating the flooring.');
        }
    } catch (err) {
        next(err)
    }
}

// delete logic
async function deleteSingleFlooring(req, res, next) {
    try {
        const singleFlooring = await deleteSingleFlooringModel(req.params.id);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(singleFlooring);
    }
    catch (err) {
        next(err);
    }
}

module.exports = { getAllFloorings, updateFlooring, getSingleFlooring, setSingleFlooring, deleteSingleFlooring };