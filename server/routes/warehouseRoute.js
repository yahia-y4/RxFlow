const express = require("express");
const warehouseRouter = express.Router();
module.exports = warehouseRouter;

const {createWarehouse, updateWarehouse, getWarehouses, getWarehouseById, deleteWarehouse} = require("../controllers/warehousesController.js");
const authMiddleware = require("../middlewares/auth.js");
warehouseRouter.get("/getById/:id", authMiddleware, getWarehouseById);

warehouseRouter.post("/create", authMiddleware, createWarehouse);
warehouseRouter.put("/update/:id", authMiddleware, updateWarehouse);
warehouseRouter.get("/getAll", authMiddleware, getWarehouses);
warehouseRouter.delete("/delete/:id", authMiddleware, deleteWarehouse);