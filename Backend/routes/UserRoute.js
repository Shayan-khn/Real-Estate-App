import express from 'express'
import userData from '../controllers/UserController.js'

const router = express.Router()

router.get('/user',userData)

export default router