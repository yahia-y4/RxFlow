const express = require('express');
const statisticsRouter = express.Router();
const authMiddleware = require("../middlewares/auth.js");
const {TopSellingBySales,getAllstatistics_items,lowSellingBySales} = require('../controllers/statisticsController.js')
statisticsRouter.get('/TopSellingBySales',authMiddleware,TopSellingBySales)
statisticsRouter.get('/getAllstatistics_items',authMiddleware,getAllstatistics_items)
statisticsRouter.get('/lowSellingBySales',authMiddleware,lowSellingBySales)

module.exports = statisticsRouter;
