 import express from "express";

 const userRoutes =express.Router();
//get








//post
userRoutes.post("/register",(req,res)=>{
    const {name} = req.body;
    res.status(200).json({data:`welcome${name}`})
})




//put




//del



 export default userRoutes