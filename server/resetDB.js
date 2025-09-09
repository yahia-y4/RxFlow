const sequelize  = require('./db');
const models = require('./models/index.js');

async function resetDatabase() {
  try {
    // تعطيل فحص FK مؤقتًا لتجنب أي خطأ
    await sequelize.query('PRAGMA foreign_keys = OFF');

    // إعادة إنشاء كل الجداول
    await sequelize.sync({ force: true });

    // إعادة تفعيل FK بعد الإنشاء
    await sequelize.query('PRAGMA foreign_keys = ON');

    console.log(' Database reset and tables recreated successfully!');
  } catch (error) {
    console.error(' Error resetting database:', error);
  } finally {
    await sequelize.close(); // إغلاق الاتصال بعد الإنشاء
  }
}

resetDatabase();