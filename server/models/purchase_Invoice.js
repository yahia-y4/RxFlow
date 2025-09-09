const {DataTypes} = require('sequelize');
const Warehouse = require('./warehouse.js');
const sequelize = require('../db.js');
const warehouse = require('./warehouse.js');
const purchase_Invoice = sequelize.define('purchase_Invoice', {
    warehouseId:{
        type:DataTypes.INTEGER,
        allowNull:false,    
        references:{
            model:warehouse,
            key:'id'    
        }},
        total_price:{
            type:DataTypes.FLOAT,
            allowNull:false 
        },
        paid_amount:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        payment_status:{
            type:DataTypes.STRING,
            allowNull:false 
        },
        purchase_date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        note:{
            type:DataTypes.STRING,  
            allowNull:true
        }
});
Warehouse.hasMany(purchase_Invoice, { foreignKey: 'warehouseId' });
purchase_Invoice.belongsTo(Warehouse, { foreignKey: 'warehouseId' });
module.exports = purchase_Invoice;