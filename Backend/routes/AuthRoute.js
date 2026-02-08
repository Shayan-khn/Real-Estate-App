import express from 'express'
import { signUp , signIn, google} from '../controllers/AuthController.js'

const router = express.Router()

router.post('/SignUp',signUp)
router.post('/SignIn',signIn)
router.post('/google', google)

export default router