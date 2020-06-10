const { Router } = require('express')

const UserController = require('./controllers/UserController')
const UsersController = require('./controllers/UsersController')

const router = Router()

router.post('/user', UserController.create)
router.get('/user/:email', UserController.read)
router.delete('/user/:email', UserController.delete)

router.get('/users', UsersController.read)

module.exports = router