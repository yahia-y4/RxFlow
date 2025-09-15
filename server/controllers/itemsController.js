
const  sequelize  = require("../db");
const { Item } = require("../models");
const {createSalesRecord} = require("./salesRecordsController");
const {createNotice} = require('./noticeController.js')
const {appSettingsData} = require('./appSettingsConroller.js')


const createItem = async (req, res) => {
  const userId = req.user.id;
  const {
    name,
    company,
    form,
    form_unit,
    concent,
    concent_unit,
    titer,
    titer_unit,
    package,
    package_unit,
    quantity,
    price,
    profit,
    code,
    expiry_date,
  } = req.body;
  try {
    const newItem = await Item.create({
      name,
      company,
      form,
      form_unit,
      concent,
      concent_unit,
      titer,
      titer_unit,
      package,
      package_unit,
      quantity,
      price,
      profit,
      code,
      expiry_date,
      userId,
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

 const updateItem = async (req, res) => {
  const itemId = req.params.id;
  const userId = req.user.id;
const item = await Item.findOne({ where: { id: itemId, userId } });
if(!item){
  return res.status(404).json({ error: "Item not found" });
}
const{
     name,
    company,
    form,
    form_unit,
    concent,
    concent_unit,
    titer,
    titer_unit,
    package,
    package_unit,
    quantity,
    price,
    profit,
    code,
    expiry_date,
  } = req.body;

  try {
    await Item.update(
      {
        name,
        company,
        form,
        form_unit,
        concent,
        concent_unit,
        titer,
        titer_unit,
        package,
        package_unit,
        quantity,
        price,
        profit,
        code,
        expiry_date,
        isUpdated: true

      },
      { where: { id: itemId, userId } }
    );
    res.status(200).json({ message: "Item updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const delItem = async (req, res) => {
  const itemId = req.params.id;
  const userId = req.user.id;
  const item = await Item.findOne({ where: { id: itemId, userId } });
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  try {
    await Item.destroy({ where: { id: itemId, userId } });
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }

}
 
const getOneItem = async (req, res) => {
  const itemId = req.params.id;
  const userId = req.user.id;
  const item = await Item.findOne({ where: { id: itemId, userId } });
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.status(200).json(item);
};
const getAllItems = async (req, res) => {
  const userId = req.user.id;
try {
  const items = await Item.findAll({ where: { userId },attributes:["id","name","company","form","price","profit","quantity","code"] });
  res.status(200).json(items);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: "Internal server error" });
}
};
const sellItems = async (req, res) => {
  const userId = req.user.id;
  const { items } = req.body;

  const t = await sequelize.transaction();

  try {
  
    for (let i of items) {
      const _item = await Item.findOne({ where: { id: i.id, userId }, transaction: t });
      if (!_item) throw new Error(`العنصر ${i.id} غير موجود`);
      if (_item.quantity < i.quantity) throw new Error(`الكمية غير متوفرة للعنصر ${_item.name}`);
    }

 
    await Promise.all(
      items.map(async i => {
        const _item = await Item.findOne({ where: { id: i.id, userId }, transaction: t });
        _item.quantity -= i.quantity;
        await _item.save({ transaction: t });
      })
    );


    const salesRecord = await createSalesRecord(userId, items, t);

    await t.commit();
    return res.status(201).json({ message: "تمت عملية البيع بنجاح", salesRecord });
  } catch (err) {
    await t.rollback();
    console.error(err);
    return res.status(500).json({ message: err.message || "خطأ في السيرفر" });
  }
};

module.exports = {
  createItem,
  updateItem,
  delItem,
  getAllItems,
  getOneItem,
  sellItems
};
