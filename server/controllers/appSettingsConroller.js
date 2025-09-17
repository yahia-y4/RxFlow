
const fs = require('fs')
const path = require('path')
const appSettingsPath = path.join(__dirname, '..', 'config', 'appSettings.json')

let appSettingsData ={}
try{
    appSettingsData = JSON.parse(fs.readFileSync(appSettingsPath))
}catch(e){
    console.log(e)
}
const createAppSettings_file = async ()=>{
try{
if(!fs.existsSync(appSettingsPath)){
    const data = {
    "unit_settings": {
        "forms": [
            "حب",
            "كبسول",
            "شراب",
            "معلق",
            "محلول",
            "قطرة",
            "مرهم",
            "كريم",
            "جل",
            "تحميلة",
            "أمبولة",
            "بخاخ",
            "لصقة"
        ],
        "concent_units": [
            "mg/mL",
            "mg/5mL",
            "µg/mL",
            "IU/mL",
            "mg/tablet",
            "mg/capsule",
            "mg/suppository",
            "mg/patch",
            "mg/g",
            "%",
            "µg/spray",
            "mg/drop",
            "IU/drop"
        ],
        "titer_units": [
            "mg/tablet",
            "g/tablet",
            "µg/tablet",
            "mg/capsule",
            "g/capsule",
            "µg/capsule",
            "mg/suppository",
            "g/suppository",
            "mg/patch",
            "µg/patch",
            "µg/h/patch",
            "µg/puff",
            "mg/puff"
        ],
        "package_units": [
            "علبة",
            "شريط",
            "زجاجة",
            "أمبولة",
            "أنبوب",
            "قنينة",
            "كيس",
            "عبوة"
        ]
    },
    "currency_Settings": {
        "current_Currency": {
            "name": "دولار امريكي",
            "symbol": "$"
        },
        "currencies": [
            {
                "name": "دولار امريكي",
                "symbol": "$"
            },
            {
                "name": "يورو",
                "symbol": "€"
            },
            {
                "name": "ليرة تركي",
                "symbol": "₺"
            },
            {
                "name": "ليرة سوري",
                "symbol": "SR"
            }
        ],
        "conversion_rate": 1
    },
    "Drug_Statistics_Settings": {
        "Default_Zero_Quantity":2,
        "Expiry_warning_before": 7,
        "High_Sales_Threshold": 50,
        "Low_Sales_Threshold": 10,
        "Minimum_Quantity_Level": 5,
        "Maximum_Quantity_Level": 35
    },
    "Supplier_Statistics_Settings": {
        "High_Receivables_Threshold": 150,
        "Low_Receivables_Threshold": 10
    },
    "Customer_Settings": {
        "High_Debt_Threshold": 150,
        "Low_Debt_Threshold": 10
    },
    "Notices_Settings": {
     
        "Expiry_Notices": true,
        "Low_Stock_Quantity_Notices": true,
        "Notification_of_reaching_true_zero": true,
        "Add_medication_Notices": false,
        "Delete_medication_Notices": true,
        "Add_supplier_Notices": true,
        "Update_supplier_Notices": true,
        "Delete_supplier_Notices": true,
        "payment_supplier_Notices": true,
        "Add_customer_Notices": true,
        "Add_debt_customer_Notices": true,
        "Update_customer_Notices": true,
        "Delete_customer_Notices": true,
        "Receive_payment_customer_Notices": true
    }
}
     fs.writeFileSync(appSettingsPath,JSON.stringify(data))
     appSettingsData = data
}else{
    console.log("appSettings file already exists")
    appSettingsData = JSON.parse(fs.readFileSync(appSettingsPath))
}
}catch(error){
    console.log(error)
}

}
const getAppSettings = async (req,res)=>{
    try{
        return res.status(200).json(appSettingsData)
    }catch(error){
        return res.status(500).json({
            Error: error.message,
          });
    }
}
const updateAppSettings = async (req,res)=>{
    try{
    
        const {data} = req.body
        appSettingsData = data
        fs.writeFileSync(appSettingsPath,JSON.stringify(data))
        return res.status(200).json({
            message: "appSettings updated successfully",
          })
    }catch(error){
        return res.status(500).json({
            Error: error.message,
          });
    }
}



module.exports = {
    createAppSettings_file,
    appSettingsData,
    getAppSettings,
    updateAppSettings
}