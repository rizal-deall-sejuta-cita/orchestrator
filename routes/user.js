const router = require('express').Router()

const Controller = require('../controller/userController');

router.get('/', Controller.findAll)
router.get('/:id', Controller.findById)
router.post('/', Controller.createUser)
router.put('/:id', Controller.updateUser)
router.delete('/:id', Controller.deleteUser)

module.exports = router
