const cartItems = require("../Models/cartModel")

// add to cart
exports.addToCartController = async (req,res)=>{
    const {id,image,title,price,quantity} = req.body
    const userId = req.payload
    try {
        const existingCar = await cartItems.findOne({id,userId})
        if(existingCar){
            existingCar.quantity+=1
            existingCar.totalPrice = existingCar.price * existingCar.quantity
            await existingCar.save()
            res.status(200).json("Items added successfully to your cart")

        }else{
            const newCar = new cartItems({
                id,image,title,price,quantity,totalPrice:price,userId
            })
            await newCar.save()
            res.status(200).json("Item added successfully to your cart")
        }
        
    } catch (err) {
        res.status(401).json(err)
        
    }
}

// get cart
exports.getCartController = async (req,res)=>{
    const userId = req.payload
    try {
        const allCars = await cartItems.find({userId})
        res.status(200).json(allCars)
    } catch (err) {
        res.status(401).json(err)
    }
}
// remove cart item
exports.removeCartItemController = async (req,res)=>{
    const {id} = req.params
    try {
        const removeCar = await cartItems.findByIdAndDelete({_id:id})
        res.status(200).json(removeCar)
    } catch (err) {
        res.status(401).json(err)
        
    }
}

// incrementing quantity
exports.incrementItemController = async (req,res)=>{
    const {id} = req.params
    try {
        const seletedCar = await cartItems.findOne({_id:id})
        seletedCar.quantity+=1
        seletedCar.totalPrice = seletedCar.quantity * seletedCar.price
        await seletedCar.save()
        res.status(200).json(seletedCar)
    } catch (err) {
        res.status(401).json(err)
        
    }
}

// decrement
exports.decrementItemController = async (req,res)=>{
    const {id} = req.params
    try {
        const seletedCar = await cartItems.findOne({_id:id})
        seletedCar.quantity-=1
        if(seletedCar.quantity==0){
            await cartItems.deleteOne({_id:id})
            res.status(200).json("Quantity updated")
        }else{
            seletedCar.totalPrice = seletedCar.quantity * seletedCar.price
            await seletedCar.save()
            res.status(200).json(seletedCar)
        }
    } catch (err) {
        res.status(401).json(err)
        
    }
}

// empty cart
exports.emptyCartController = async (req,res)=>{
    const userId = req.payload
    try {
        const result = await cartItems.deleteMany({userId})
        res.status(200).json("deleted successfully")

    } catch (err) {
        res.status(401).json(err)
        
    }
}