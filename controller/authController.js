const auth = require('../apis/auth')

class AuthController {
    static async login(req, res, next) {
        try {
            const { username, password } = req.body
            const result = await auth({
                method: 'POST',
                url: '/login',
                data: {
                    username,
                    password
                }
            })
            let { access_token, refresh_token } = result.data

            res.status(result.status).json({ access_token, refresh_token })
        } catch ({ response }) {
            let { status } = response
            let { data: { message } } = response

            next({
                status,
                message
            })
        }
    }
}

module.exports = AuthController
