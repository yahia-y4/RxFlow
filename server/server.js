const express = require('express');
const sequelize = require('./db');
const  models = require('./models/index.js');
const Router = require('./routes/index.js');
const server = express();
server.use(express.json());



server.use('/user', Router.userRouter);
server.use('/items', Router.itemsRouter);






const port = 4000;

async function startServer() {
  try {
    // تعطيل FK مؤقتًا لتجنب الأخطاء
    await sequelize.query('PRAGMA foreign_keys = OFF');

    // مزامنة الجداول مع الحفاظ على البيانات
    await sequelize.sync({ alter: true });

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


