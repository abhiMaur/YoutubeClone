import {asyncHandler} from "../utilities/asyncHandler.js"

const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"Abhishek's server is live!"
    })
})

export {registerUser}