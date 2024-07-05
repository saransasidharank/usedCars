const express = require('express')
const carController = require('../Controllers/carController')
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMidddleware')
const wishlistController = require('../Controllers/wishlistController')
const cartController = require("../Controllers/cartController")
const router = new express.Router()

// getAllCars
router.get('/all-cars',carController.getAllCarController)
// register
router.post('/register',userController.registerController)
// login
router.post('/login',userController.loginController)
// view
router.get('/view-car/:id',carController.getACarController)
// addTO wishlist
router.post('/add-to-wishlist',jwtMiddleware,wishlistController.addToWishlistController)
// getwishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlistController)
// remove wishlist
router.delete('/wishlist-remove/:id',jwtMiddleware,wishlistController.removeCarWishlistController)
// add to cart
router.post('/add-to-cart',jwtMiddleware,cartController.addToCartController)
// get- cart
router.get('/get-cart',jwtMiddleware,cartController.getCartController)
// remove cartitem
router.delete('/remove-cart/:id',jwtMiddleware,cartController.removeCartItemController)
//incremet cart
router.get('/cart-increment/:id',jwtMiddleware,cartController.incrementItemController)
// decrement item
router.get('/cart-decrement/:id',jwtMiddleware,cartController.decrementItemController)
// empty cart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCartController)

module.exports = router