const { Router } = require('express')

const UserController = require('./controllers/UserController')
const UsersController = require('./controllers/UsersController')
const SessionController = require('./controllers/SessionController')
const ProjectController = require('./controllers/ProjectController')

const router = Router()

router.post('/user', UserController.create)
router.get('/user/:email', UserController.read)
router.delete('/user/:email', UserController.delete)

router.get('/users', UsersController.read)

router.post('/sessions', SessionController.create)

router.post('/project', ProjectController.create)
router.get('/project/:user_id', ProjectController.index)
router.delete('/project/:_id', ProjectController.delete)

module.exports = router