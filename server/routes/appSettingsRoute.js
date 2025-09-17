const express = require('express');
const appSettingsRouter = express.Router();
const authMiddleware = require("../middlewares/auth.js");
const {getAppSettings,updateAppSettings,calculation_Average_Sales} = require('../controllers/appSettingsConroller')
appSettingsRouter.get('/getAppSettings',getAppSettings)
appSettingsRouter.put('/updateAppSettings',updateAppSettings)
appSettingsRouter.put('/calculation_Average_Sales',authMiddleware,calculation_Average_Sales)

module.exports = appSettingsRouter