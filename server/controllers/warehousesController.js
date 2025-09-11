const { warehouse, payment_sent } = require("../models")
const sequelize = require("../db");

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

const sendPayment = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const { payable_amount_send,note } = req.body;

        // الحصول على المستودع الحالي
        const currentWarehouse = await warehouse.findOne({
            where: { id, userId },
            transaction
        });

        if (!currentWarehouse) {
            throw new Error("Warehouse not found");
        }

        // تحديث المبلغ المستحق
        await warehouse.update(
            { paid_amount: currentWarehouse.paid_amount + payable_amount_send },
            { where: { id, userId }, transaction }
        );

        // إنشاء سجل الدفع
        await payment_sent.create({
            warehouseId: id,
            userId,
            amount: payable_amount_send,
            note,
        }, { transaction });

        await transaction.commit();
        res.status(200).json({ message: "Warehouse updated successfully" });

    } catch (error) {
        await transaction.rollback();
        console.error(error);
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
}

const getPaymentSentHistory = async (req, res) => {
    try {
        const userId = req.user.id;

        const payments = await payment_sent.findAll({
            where: { userId },
            include: [
                {
                    model: warehouse,
                    attributes: ["id","name", "warehouse_name","phone_number"]
                }
            ],
         
        });
        res.status(200).json(payments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
}

module.exports = { createWarehouse, updateWarehouse, getWarehouses, getWarehouseById, deleteWarehouse, sendPayment, getPaymentSentHistory }
