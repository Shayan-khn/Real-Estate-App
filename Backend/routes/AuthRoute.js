import express from 'express'
import signupDetail from '../controllers/AuthController.js'

const router = express.Router()

router.post('/SignUp',signupDetail)

export default router