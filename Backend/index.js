import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/UserRoute.js'
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Error:",err)
})
const app = express()

app.listen(process.env.PORT,()=>{
    console.log("App Running at port 3500!")
})

app.use('/core-api-user',userRoute)