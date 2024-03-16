const express = require('express');
const router = express.Router();
const productRoutes = require("./products");

router.use("/floorings", productRoutes);


module.exports = router;