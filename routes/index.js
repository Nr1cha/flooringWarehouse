const express = require('express');
const router = express.Router();
const productRoutes = require("./products");
const customerRoutes = require("./customer");
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
const swaggerDocument = require(`../swagger-output-${process.env.CURRENT_LANE}.json`);
// const swagger = require("../swagger-output-local.json");


router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use("/floorings", productRoutes);
router.use("/customers", customerRoutes);



module.exports = router;