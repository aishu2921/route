 import express from "express"
 import dotenv from "dotenv"
 dotenv.config()

 import cors from "cors"
 import connectDB from "./Database/connectDB.js"
import userRoutes from "./routes/userRoutes.js"
 const app = express()
 app.use(express.json())

 app.use(cors())
 app.use ("/api/user",userRoutes)
 app.get("/",(req,res)=>{
    res.status(200).json({Message:"api change sucessfully"})
 })

app.get("/api/heart-beat",(req,res)=>{
    res.status(200).json({data:"Heart Beat Was  sucessfully"})
 })
 
 app.listen(process.env.PORT,()=> {
    console.log(`server running sucessfully at port ${process.env.PORT}`)
 })
 connectDB();