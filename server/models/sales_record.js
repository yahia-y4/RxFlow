const {DataTypes} = require('sequelize');
const sequelize = require('../db.js');
const session = require('./session.js');
const User = require('./user.js');
const { use } = require('react');
const SalesRecord = sequelize.define('SalesRecord', {
    sessionId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:session,  
            key:'id'
        }
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:'id'
        }
    },
   
    create_date:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue: DataTypes.NOW

    }
});
User.hasMany(SalesRecord, { foreignKey: 'userId' });
SalesRecord.belongsTo(User, { foreignKey: 'userId' });
session.hasMany(SalesRecord, { foreignKey: 'sessionId' });
SalesRecord.belongsTo(session, { foreignKey: 'sessionId' });
module.exports = SalesRecord;