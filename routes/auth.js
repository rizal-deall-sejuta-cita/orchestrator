const router = require('express').Router()

const Controller = require('../controller/authController');

router.post('/', Controller.login)

module.exports = router
