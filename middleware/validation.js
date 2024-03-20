const ObjectId = require('mongodb').ObjectId;
const Joi = require('joi');

//validate GET-id
const flooringIdSchema = (req, res, next) => {
    const id = req.params.id;

    // Check if the id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid flooring id, please add a valid id' });
    }

    // If validation passes, call next() to proceed to the controller function
    next();
};

//validate GET-id
const customerIdSchema = (req, res, next) => {
    const id = req.params.id;

    // Check if the id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid customer id, please add a valid id' });
    }

    // If validation passes, call next() to proceed to the controller function
    next();
};

// Define the schema
const flooringSchema = Joi.object({
    Name: Joi.string().min(1).required(),
    Description: Joi.string().min(1).required(),
    Price: Joi.number().min(1).required(),
    Category: Joi.string().min(1).required(),
    Stock: Joi.number().min(1).required().strict(),
    Manufacturer: Joi.string().min(1).required(),
    date_added: Joi.string().min(1).required(),
    Weight_kg: Joi.number().min(1).required().strict(),
    Product_id: Joi.number().min(1).required().strict()
});

// Define SECOND schema
const customerSchema = Joi.object({
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required(),
    email: Joi.string().min(1).required(),
    phoneNumber: Joi.number().min(1).required().strict()
});

// Validate POST-id
const validateFlooringPost = (req, res, next) => {
    const { error } = flooringSchema.validate(req.body);

    if (error) {
        // There are errors. Render the form again with sanitized values/error messages.
        res.status(400).json({ errors: error.details });
    } else {
        // Data from form is valid.
        next();
    }
};

// Validate POST-id
const validateCustomerPost = (req, res, next) => {
    const { error } = customerSchema.validate(req.body);

    if (error) {
        // There are errors. Render the form again with sanitized values/error messages.
        res.status(400).json({ errors: error.details });
    } else {
        // Data from form is valid.
        next();
    }
};


module.exports = { flooringIdSchema, customerIdSchema, validateFlooringPost, validateCustomerPost };
