const router = require('express').Router()

const auth = require('./auth')
const users = require('./user')
const { errorHandler } = require('../middlewares/errorHandler')
const { authentication } = require('../middlewares/authentication');

router.use('/login', auth)

router.use(authentication)

router.use('/users', users)

router.use(errorHandler)

module.exports = router
