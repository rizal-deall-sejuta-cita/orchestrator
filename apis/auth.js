const axios = require('axios').default

const url = process.env.BASE_URL_AUTH

const instance = axios.create({
    baseURL: url
})

module.exports = instance
