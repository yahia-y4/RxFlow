const express = require('express');
const sequelize = require('./db');
const  models = require('./models/index.js');
const Router = require('./routes/index.js');
const server = express();
server.use(express.json());



server.use('/user', Router.userRouter);
server.use('/items', Router.itemsRouter);
server.use('/salesRecords', Router.salesRouter);
server.use('/warehouse', Router.warehouseRouter);
server.use('/purchaseInvoice', Router.purchaseInvoiceRouter);
server.use('/customer', Router.customerRouter);
server.use('/classify', Router.classifyRouter)

server.get('/',(req,res)=>{
    res.send('hello world')
})


const port = 4000;

async function startServer() {
  try {
    // تعطيل FK مؤقتًا لتجنب الأخطاء
    // await sequelize.query('PRAGMA foreign_keys = OFF');

    // await models.Invoice.sync({force:true});
    // await models.warehouse.sync({force:true});
    // await sequelize.sync({ force: true });
    // await models.Invoice.sync({force:true})
    // await models.ItemManyInvoice.sync({force:true})
    // await models.payment_sent.sync({force:true})
    // // await models.customer.sync({force:true})
    // await models.customers_debts.sync({force:true})
    // await models.payment_received.sync({force:true})
    // await models.Classify.sync({force:true})
    // await models.ItemManyClassify.sync({force:true})

    // إعادة تفعيل FK
    await sequelize.query('PRAGMA foreign_keys = ON');

    console.log('Database synced successfully!');

    // هنا يمكنك بدء السيرفر
    server.listen(port, () => console.log(`Server running on port ${port}`));

  } catch (err) {
    console.error('Error syncing database:', err);
  }
}

startServer();


