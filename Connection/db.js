const mongoose = require('mongoose')

const connectionString = process.env.DB_CONNECTION

mongoose.connect(connectionString).then(
    (res)=>{
        console.log("UsedCars server Connected successfully with mongoDB atlas");

    }
).catch((err)=>{
    console.log(err);
})