//require('dotenv').config({path:'./env'})
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js"
import express from "express"
import dotenv from "dotenv"
const app = express()
dotenv.config({
    path:'./env'
})

connectDB()

//Approach 1: By IIFE
/* ( async (  )=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App id listening on port: ${process.env.PORT}`);
        })
    } 
    catch (error) {
        console.log("ERROR: ", error)
        throw err
    }
} )() */

//