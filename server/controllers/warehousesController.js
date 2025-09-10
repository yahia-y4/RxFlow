const { warehouse } = require("../models")

const createWarehouse = async (req, res) => {
    try {
        const userId = req.user.id;
        const { name, phone_number, location, warehouse_name, payable_amount, paid_amount } = req.body;
        const newWarehouse = await warehouse.create({ name, phone_number, location, warehouse_name, payable_amount, paid_amount, userId });
        res.status(201).json(newWarehouse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
}

const updateWarehouse = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, phone_number, location, warehouse_name } = req.body;
        await warehouse.update(
            { name, phone_number, location, warehouse_name, isUpdated: true },
            { where: { id } }
        );
        res.status(200).json({ message: "Warehouse updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
}

const getWarehouses = async (req, res) => {
    try {
        const userId = req.user.id;
        const warehouses = await warehouse.findAll({
            where: { userId },
            attributes: ["id", "name", "warehouse_name"]
        });
        res.status(200).json(warehouses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
}

const getWarehouseById = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const foundWarehouse = await warehouse.findOne({ where: { id, userId } });
        if (!foundWarehouse) {
            return res.status(404).json({ error: "Warehouse not found" });
        }
        res.status(200).json(foundWarehouse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
}
const deleteWarehouse = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const deletedCount = await warehouse.destroy({
            where: { id, userId, payable_amount: 0 }
        });
        if (deletedCount === 0) {
            return res.status(400).json({ message: "Cannot delete: Either warehouse not found or payable_amount is not zero." });
        }
        res.status(200).json({ message: "Warehouse deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
}

module.exports = { createWarehouse, updateWarehouse, getWarehouses, getWarehouseById, deleteWarehouse }
