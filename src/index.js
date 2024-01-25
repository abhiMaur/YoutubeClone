//require('dotenv').config({path:'./env'})
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js"
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})

connectDB() // this returns a promise
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}, if not, then check port:8000`)
    })
})
.catch((error)=>{
    console.log("App connection failed! ", error);
})

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