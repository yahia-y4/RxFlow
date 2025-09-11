const {customer} = require('../models');

const createCustomer =async (req, res) =>{
try{
    const userId = req.user.id
    const {name,phone_number,location} = req.body;
    const newCustomer = await customer.create({
        name,
        phone_number,
        location,
        userId,
        debts:0
    })
    res.status(201).json({
        message:'customer created successfully',
        newCustomer
    })
}catch(error){
    res.status(500).json({
        message:'internal server error',
        error
    })
}

}
const getCustomers = async (req, res) =>{
    try{
        const userId = req.user.id
        const customers = await customer.findAll({
            where:{
                userId
            },attributes:["id","name","phone_number"]
        })
        res.status(200).json(
            customers
        )
    }catch(error){
        res.status(500).json({
            message:'internal server error',
            error
        })
    }
}
const getCustomerById = async (req,res)=>{
    try{
        const userId = req.user.id
        const id = req.params.id
        const _customer = await customer.findOne({
            where:{
                id,
                userId
            }
        })
        if(!_customer){
            return res.status(404).json({
                message:'customer not found'
            })
        }
        res.status(200).json(
            _customer
        )
    }catch(error){
        res.status(500).json({
            message:'internal server error',
            error
        })
    }
}


module.exports ={
    createCustomer,
    getCustomers,
    getCustomerById
}

