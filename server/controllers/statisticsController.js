const {Item,ItemSalesSummary} = require('../models')
const { Op } = require('sequelize');
const {appSettingsData} = require('./appSettingsConroller.js')
const TopSellingBySales = async (req,res) => {
    try{
        const userId = req.user.id;
        const best_selling = await ItemSalesSummary.findAll({
            where: {
                userId,
                sales: {[Op.gt]:appSettingsData.Drug_Statistics_Settings.Average_Sales}
            },
            order: [['sales', 'DESC']],
            limit: appSettingsData.Drug_Statistics_Settings.getting_limit,
        })
        res.json(best_selling)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}
const lowSellingBySales = async (req,res) => {
    try{
        const userId = req.user.id;
        const best_selling = await ItemSalesSummary.findAll({
            where: {
                userId,
                sales: {[Op.lte]:appSettingsData.Drug_Statistics_Settings.Average_Sales}
            },
            order: [['sales', 'ASC']],
            limit: appSettingsData.Drug_Statistics_Settings.getting_limit,
        })
        res.json(best_selling)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}
const getAllstatistics_items = async (req,res) => {
    try{
        const userId = req.user.id;
        const items = await ItemSalesSummary.findAll({
            order: [['sales', 'DESC']],
            where: {
                userId,
            },include:{
                model: Item,
                attributes: ['name','company','form']
            }
        })
        res.json(items)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}
module.exports = {
    TopSellingBySales,
    getAllstatistics_items,
    lowSellingBySales
}
