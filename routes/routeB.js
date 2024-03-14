const express = require('express');
const router = express.Router();
const bookRoutes = require("./bookRoutes");
const memberRoutes = require("./memberRoutes");
const swaggerUI = require("swagger-ui-express");
const swaggerConfig = require(`../swagger-output-${process.env.CURRENT_LANE}.json`);

router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));
router.use('/books', bookRoutes);
router.use('/members', memberRoutes);

module.exports = router;
