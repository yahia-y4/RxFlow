const express = require('express');
const sequelize = require('./db');
const  models = require('./models/index.js');
const Router = require('./routes/index.js');
const server = express();
server.use(express.json());

const {createAppSettings_file} = require('./controllers/appSettingsConroller.js')

server.use('/user', Router.userRouter);
server.use('/items', Router.itemsRouter);
server.use('/salesRecords', Router.salesRouter);
server.use('/warehouse', Router.warehouseRouter);
server.use('/purchaseInvoice', Router.purchaseInvoiceRouter);
server.use('/customer', Router.customerRouter);
server.use('/classify', Router.classifyRouter)
server.use('/doctorPrescription', Router.doctorPrescriptionRouter)
server.use('/notice', Router.noticeRouter)
server.use('/appSettings', Router.appSettingsRouter)
server.use('/statistics', Router.statisticsRouter)


module.exports = server;
  



