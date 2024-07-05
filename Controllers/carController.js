const cars = require('../Models/carModel')

// getAllCars
exports.getAllCarController = async (req,res)=>{
    try{
        const result = await cars.find()
        res.status(200).json(result)

    }catch(err){
        res.status(401).json(err)

    }
} 

// getcar
exports.getACarController = async (req,res)=>{
    const {id} = req.params
    try{
        const result = await cars.findOne({id})
        res.status(200).json(result)

    }catch(err){
        res.status(401).json(err)

    }
    
}