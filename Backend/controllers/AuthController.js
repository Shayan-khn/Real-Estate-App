import bcrypt from 'bcryptjs'
import User from '../models/UserModel.js'
import errorHandler from '../utils/HandleError.js'
import jwt from "jsonwebtoken"

export const signUp = async (req,res, next)=>{
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
}

export const signIn = async (req,res, next) =>{
    const {email, password} = req.body
    try {
        const validUser = await User.findOne({email})
        if(!validUser) return next(errorHandler(404,'User Not Found'))
        const validPassword = bcrypt.compareSync(password,validUser.password)
        if(!validPassword) return next(errorHandler(401,"Wrong Credentials"))
        const token = jwt.sign({id: validUser._id},process.env.JWT_SECRET)
        const {password: pass, ...rest} = validUser._doc
        res.cookie('access_token',token,{ httponly:true }).status(200).json({message:"Login Successfull",data: rest, mboolean:false})
    } catch (error) {
        next(error)
    }
}