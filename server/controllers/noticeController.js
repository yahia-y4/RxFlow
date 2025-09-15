const {Notice} = require('../models/index.js')

const createNotice = async (userId ,title,content) => {

    try {
        const notice = await Notice.create({
            userId,
            title,
            content
        });
        res.status(201).json(notice);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports={
    createNotice,
}