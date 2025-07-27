import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/UserRoute.js'
import authRoute from './routes/AuthRoute.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Error:",err)
})
const app = express()

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log("App Running at port 3500!")
})

app.use('/core-api-user/v3',userRoute)
app.use('/core-api-auth/v3',authRoute)