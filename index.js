import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
//creating app
const app = express();

//Connecting to db and listen to port
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Successfully connected to the database")

     app.listen(process.env.PORT, ()=>{
     console.log('listening on the port 3000');
    })
})

.catch((error)=> console.log("Error during connection:: ",error))
