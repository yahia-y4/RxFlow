const express = require('express');
const appSettingsRouter = express.Router();
const {getAppSettings,updateAppSettings} = require('../controllers/appSettingsConroller')
appSettingsRouter.get('/getAppSettings',getAppSettings)
appSettingsRouter.put('/updateAppSettings',updateAppSettings)

module.exports = appSettingsRouter