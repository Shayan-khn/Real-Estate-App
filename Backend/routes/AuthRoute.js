import express from 'express'
import { signUp , signIn} from '../controllers/AuthController.js'

const router = express.Router()

router.post('/SignUp',signUp)
router.post('/SignIn',signIn)

export default router