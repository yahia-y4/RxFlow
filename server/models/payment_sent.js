const {DataTypes} = require('sequelize');
const sequelize = require('../db.js');
const warehouse = require('./warehouse.js');

const Payment_sent = sequelize.define('payment_sent', {
    amount:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    payment_date:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue: DataTypes.NOW
    },
    note:{
        type:DataTypes.STRING,
        allowNull:true
    },
    warehouseId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:warehouse,
            key:'id'
        }
    }
});
warehouse.hasMany(Payment_sent, { foreignKey: 'warehouseId' });
Payment_sent.belongsTo(warehouse, { foreignKey: 'warehouseId' });
module.exports = Payment_sent;