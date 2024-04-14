const express = require('express')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const authMiddlewares = require('../middlewares/authMiddlewares')

const router = express.Router()

router.route('/signup').post(authController.signUp)
router.route('/login').post(authController.login)
router.route('/logout').post(authController.logout)

router.use(authMiddlewares.isAuthenticated)

router.route('/me').get(userController.getMe)

module.exports = router
