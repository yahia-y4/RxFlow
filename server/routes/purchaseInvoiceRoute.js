const express = require("express");
const purchaseInvoiceRouter = express.Router();
const {createPurchaseInvoice} = require("../controllers/purchaseInvoicesControllre.js");
const authMiddleware = require("../middlewares/auth.js");

purchaseInvoiceRouter.post("/create", authMiddleware, createPurchaseInvoice);

module.exports = purchaseInvoiceRouter;
