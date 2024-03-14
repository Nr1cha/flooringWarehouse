const ObjectId = require('mongodb').ObjectId;
const Joi = require('joi');

//validate GET-id
const bookIdSchema = (req, res, next) => {
    const id = req.params.id;

    // Check if the id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid book id, please add a valid id' });
    }

    // If validation passes, call next() to proceed to the controller function
    next();
};

//validate GET-id
const memberIdSchema = (req, res, next) => {
    const id = req.params.id;

    // Check if the id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid member id, please add a valid id' });
    }

    // If validation passes, call next() to proceed to the controller function
    next();
};

// Define the schema
const bookSchema = Joi.object({
    Title: Joi.string().min(1).required(),
    Author: Joi.string().min(1).required(),
    Genre: Joi.string().min(1).required(),
    Publisher: Joi.string().min(1).required(),
    ISBN: Joi.number().integer().min(1).required().strict(),
    PublishedYear: Joi.number().integer().min(1).required().strict(),
    AvailabilityStatus: Joi.string().min(1).required()
});

// Define SECOND schema
const memberSchema = Joi.object({
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required(),
    email: Joi.string().min(1).required(),
    phone: Joi.string().min(1).required(),
    memstatus: Joi.string().min(1).required()
});

// Validate POST-id
const validateBookPost = (req, res, next) => {
    const { error } = bookSchema.validate(req.body);

    if (error) {
        // There are errors. Render the form again with sanitized values/error messages.
        res.status(400).json({ errors: error.details });
    } else {
        // Data from form is valid.
        next();
    }
};

// Validate POST-id
const validateMemberPost = (req, res, next) => {
    const { error } = memberSchema.validate(req.body);

    if (error) {
        // There are errors. Render the form again with sanitized values/error messages.
        res.status(400).json({ errors: error.details });
    } else {
        // Data from form is valid.
        next();
    }
};


module.exports = { bookIdSchema, memberIdSchema, validateBookPost, validateMemberPost };
