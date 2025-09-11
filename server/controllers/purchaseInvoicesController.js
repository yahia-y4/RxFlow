const {Invoice, ItemManyInvoice, Item,warehouse} = require("../models/index.js");
const sequelize = require("../db.js");

const createPurchaseInvoice = async (req, res) => {
try {
    const t = await sequelize.transaction();
    userId = req.user.id;
    const { items , warehouseId , paid_amount, note } = req.body;
    let total_price = 0;
    let payment_status = "complete";
    for (let item of items) {
        total_price += item.price * item.quantity;
    }

    if(total_price > paid_amount) {
        payment_status = "partial";
        const _warehouse = await warehouse.findByPk(warehouseId);
        if(!_warehouse) {
            throw new Error("Warehouse not found");
        }
        _warehouse.payable_amount += total_price - paid_amount;
        await _warehouse.save({ transaction: t });
    }

  const newPurchaseInvoice = await Invoice.create({ userId, warehouseId, total_price, paid_amount, payment_status, note }, { transaction: t });
     await Promise.all(items.map(async (item) => {
        const _item = await Item.findByPk(item.id);
        if(!_item) {
            throw new Error("Item not found");
        }
        _item.quantity += item.quantity;
        await _item.save({ transaction: t });
    }));
    
    await ItemManyInvoice.bulkCreate(items.map((item) => ({ itemId: item.id,
         invoiceId: newPurchaseInvoice.id,
          quantity: item.quantity, 
          price: item.price
         })), { transaction: t });

    await t.commit();
    res.status(201).json({ message: "Purchase invoice created successfully", newPurchaseInvoice });
} catch (error) {
    await t.rollback();
    console.error(error);
    res.status(500).json({ error: "Internal server error", message: error.message });
}

}
const getPurchaseInvoices = async (req, res) => {
    try {
        const userId = req.user.id;

        const purchaseInvoices = await Invoice.findAll({
            where: {
                userId: userId
            },include:[
                {
                    model:warehouse,
                    attributes:["id","name","warehouse_name"]
                }
            ],
            attributes:["id","createdAt"]

        });
        res.status(200).json(purchaseInvoices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
}
const getPurchaseInvoiceById = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
      const _Invoice = await Invoice.findOne({where:{userId,id},include:[
        {
            model:warehouse,
            attributes:["id","name","phone_number","location","warehouse_name"]

        },{
            model:Item,
            through:{
                attributes:["quantity","price"]
            },
            attributes:["id","name","company","form","code"]

        }
      ]})
        res.status(200).json(_Invoice);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
}
const deletePurchaseInvoice = async (req,res) =>{
    try{
const userId = req.user.id;
const {id} = req.params;
const _Invoice = await Invoice.findOne({where:{userId,id}});
if(!_Invoice) {
    throw new Error("Invoice not found");
}
const _warehouse = await warehouse.findByPk(_Invoice.warehouseId);
if(_warehouse.payable_amount > _warehouse.paid_amount) {
    throw new Error("can not del this invoice because the warehouse has payable_amount");
}
await _Invoice.destroy();
    }catch(error){
       
        res.status(500).json({ error: "Internal server error", message: error.message });
    }
}
module.exports = {
    createPurchaseInvoice,
    getPurchaseInvoices,
    getPurchaseInvoiceById,
    deletePurchaseInvoice
};