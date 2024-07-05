require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./Connection/db')
const router = require('./Routes/router')

const UsedCarServer = express()
UsedCarServer.use(cors())
UsedCarServer.use(express.json())
UsedCarServer.use(router)

const PORT = 3000 || process.env.PORT
UsedCarServer.listen(PORT,()=>{
    console.log(`UsedCar Server Started at port: ${PORT}`);
})

UsedCarServer.get('/',(req,res)=>{
    res.send(`<h1> UsedCar server started... waiting for client request!!! </h1>`)
})