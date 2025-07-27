import bcrypt from 'bcryptjs'
import User from '../models/UserModel.js'

const signUp =  (async (req,res)=>{
    console.log(req.body)
    const {username, email, password} = req.body
    const hashPassword = bcrypt.hashSync(password,5)
    const newUser = new User({username, email, password: hashPassword})
    try {
        await newUser.save()
        res.status(201).json({message:"User Created Successfully",mboolean:false})
    } catch (error) {
        res.status(500).json({emessage: error.message, mboolean:true})
    }   
})

export default signUp