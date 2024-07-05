const wishlists = require('../Models/wishlistModel')
// add
exports.addToWishlistController = async (req,res)=>{
    const {id,image,title,price,type,spec} = req.body
    const userId = req.payload
    try{
        const existingCar = await wishlists.findOne({id,userId})
        if(existingCar){
            res.status(406).json("Item already available in wishlist!!!")

        }else{
            const newCar = new wishlists({
                id,image,title,price,type,spec,userId
            })
            await newCar.save()
            res.status(200).json(newCar)
        }

    }catch(err){
        res.status(401).json(err)

    }
}

// get
exports.getWishlistController = async (req,res)=>{
    const userId = req.payload
    try {
        const allCars = await wishlists.find({userId})
        res.status(200).json(allCars)
        
    } catch (err) {
        res.status(401).json(err)
        
    }
}
// remove
exports.removeCarWishlistController = async (req,res)=>{
    const {id} = req.params
    try {
        const removeCar = await wishlists.findByIdAndDelete({_id:id})
        res.status(200).json(removeCar)
    } catch (err) {
        res.status(401).json(err)
        
    }
}