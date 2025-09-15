
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
    "currency_Settings":{
        "current_Currency":{
            "name":"دولار امريكي",
            "symbol":"$"
        }
        ,
        "currencies":[
            {
                "name":"دولار امريكي",
                "symbol":"$"
            },
            {
                "name":"يورو",
                "symbol":"€"
            },
            {
                "name":"ليرة تركي",
                "symbol":"₺"
            },{
                "name":"ليرة سوري",
                "symbol":"SR"
            }
        ],
        "conversion_rate": 1

        
    }
    ,
    "Drug_Statistics_Settings":{
        "Minimum_Stock_Level":1, 
        "Expiry_warning_before":7,
        "Minimum Stock Level":5,
        "High_Sales_Threshold":50,
        "Low_Sales_Threshold":10,
        "Minimum_Quantity_Level":3,
        "Maximum_Quantity_Level":30
    },
    "Supplier Statistics Settings":{
        "High_Receivables_Threshold":1000,
        "Low_Receivables_Threshold":100
     
    },
    "Customer_Settings":{
        "High_Debt_Threshold":1000,
        "Low_Debt_Threshold":100
    },
    "Notices_Settings":{
        "Low_Stock_Quantity_Notices":true,
        "High_Stock_Quantity_Notices":true,
        "Expiry_Notices":true,
        "Minimum_Stock_Level_Notices":true,
        "Notification_of_reaching_true_zero":true,
        "Add_medication_Notices":false,
        "Update_medication_Notices":false,
        "Delete_medication_Notices":false,
        "Sell_medication_Notices":false,
        "Add_supplier_Notices":false,
        "Update_supplier_Notices":false,
        "Delete_supplier_Notices":false,
        "payment_supplier_Notices":true,
         "Add_customer_Notices":false,
         "Add_debt_customer_Notices":false,
        "Update_customer_Notices":false,
        "Delete_customer_Notices":false,
        "Receive_payment_customer_Notices":true

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

module.exports = {
    createAppSettings_file,
    appSettingsData
}