import bcrypt from 'bcryptjs'
import User from '../models/UserModel.js'
import errorHandler from '../utils/HandleError.js'

const signUp =  (async (req,res, next)=>{
    const {username, email, password} = req.body
    const hashPassword = bcrypt.hashSync(password,5)
    const newUser = new User({username, email, password: hashPassword})
    try {
        await newUser.save()
        res.status(201).json({message:"User Created Successfully",mboolean:false})
    } catch (error) {
        // res.status(500).json({emessage: error.message, mboolean:true})
        // next(errorHandler(550,'error from the function'))
        next(error)
    }   
})

export default signUp