const { contextBridge } = require('electron');

const Data  = require('./back_end/data_base');
const events = require('./src/events')



const e1 = new events()
const D1 = new Data()
D1.f22()



