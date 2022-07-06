const auth = require('../apis/auth');

const authentication = async (req, res, next) => {
    try {
        const { access_token, refresh_token } = req.headers

        if (!access_token || !refresh_token) {
            next({
                status: 401,
                message: 'Please login first'
            })
        }

        const { data: { user, newAccessToken, newRefreshToken } } = await auth({
            method: 'GET',
            url: '/verify',
            headers: {
                access_token,
                refresh_token
            }
        })

        req.user = { ...user }
        if (!newRefreshToken) {
            if (!newAccessToken) {
                next()
            } else {
                req.newAccessToken = newAccessToken
                next()
            }
        } else {
            req.newAccessToken = newAccessToken
            req.newRefreshToken = newRefreshToken
            next()
        }

    } catch ({ response }) {
        let { status } = response
        let { data: { message }} = response

        next({
            status,
            message
        })
    }
}

module.exports = { authentication }
