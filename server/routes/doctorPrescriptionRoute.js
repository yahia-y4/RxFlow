const express = require('express');
const doctorPrescriptionRouter = express.Router();
const authMiddleware = require("../middlewares/auth.js");
const { createDoctorPrescription } = require('../controllers/doctorPrescriptionController.js');

doctorPrescriptionRouter.post('/create',authMiddleware,createDoctorPrescription);

module.exports = doctorPrescriptionRouter;


