const { Item } = require("../models");

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

const sellItems =async(req,res)=>{
  const userId = req.user.id;
  const { items } = req.body; // Array of { itemId, sellQuantity }
}

module.exports = {
  createItem,
  updateItem,
  delItem,
  getAllItems,
  getOneItem,
  sellItems
};
