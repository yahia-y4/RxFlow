const express = require('express');
const customerRouter = express.Router();
const authMiddleware = require("../middlewares/auth.js");
const {createCustomer,getCustomers,
    getCustomerById
} = require('../controllers/customersController.js');



customerRouter.post('/create',authMiddleware, createCustomer);
customerRouter.get('/getAll',authMiddleware,getCustomers);
customerRouter.get('/getOne/:id',authMiddleware,getCustomerById);

module.exports = customerRouter;