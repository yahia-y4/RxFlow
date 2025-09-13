const {DoctorPrescription , Item,ItemManyDoctorPrescription} = require('../models/index.js')
const sequelize = require('../db.js')

const createDoctorPrescription = async (req,res)=>{
  const t = await sequelize.transaction();
  try{
    const userId = req.user.id;
    const {doctor_name,patient_name,patient_age,items} = req.body;
    const doctorPrescription = await DoctorPrescription.create({
      doctor_name,
      patient_name,
      patient_age,
      userId,
    },{
      transaction: t,
    })
    await Promise.all(items.map(async (item) => {
      const { itemId, quantity,price } = item;
      await ItemManyDoctorPrescription.create({
        doctorPrescriptionId: doctorPrescription.id,
        itemId,
        quantity,
        price,
      },{
        transaction: t,
      })
    }))
    await t.commit();
    res.status(200).json({
      message: "doctor prescription created successfully",
      doctorPrescription,
    });
  }catch(error){
    await t.rollback();
    res.status(500).json({
   
      error:error.message
    });
  }
}
module.exports = {
  createDoctorPrescription,
}
