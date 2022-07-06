const user = require('../apis/user')

class UserController {
    static async findAll(req, res, next) {
        try {
            const { newAccessToken, newRefreshToken } = req
            const { id, role } = req.user
            const result = await user({
                method: 'GET',
                headers: {
                    'x-user-id': id,
                    'x-user-role': role
                }
            })
            if (!newRefreshToken) {
                if (!newAccessToken) {
                    res.status(result.status).json({ ...result.data })
                } else {
                    res.status(result.status).json({ ...result.data, newAccessToken })
                }
            } else {
                res.status(result.status).json({ ...result.data, newAccessToken, newRefreshToken })
            }
        } catch ({ response }) {
            let { status } = response
            let { data: { message } } = response

            next({
                status,
                message
            })
        }
    }

    static async findById(req, res, next) {
        try {
            const { newAccessToken, newRefreshToken } = req
            const { id: userId, role } = req.user
            const id = req.params.id
            const result = await user({
                method: 'GET',
                url: `/${id}`,
                headers: {
                    'x-user-id': userId,
                    'x-user-role': role
                }
            })

            if (!newRefreshToken) {
                if (!newAccessToken) {
                    res.status(result.status).json({ ...result.data })
                } else {
                    res.status(result.status).json({ ...result.data, newAccessToken })
                }
            } else {
                res.status(result.status).json({ ...result.data, newAccessToken, newRefreshToken })
            }
        } catch ({ response }) {
            let { status } = response
            let { data: { message } } = response

            next({
                status,
                message
            })
        }
    }

    static async createUser(req, res, next) {
        try {
            const { newAccessToken, newRefreshToken } = req
            const { id, role } = req.user
            const { username, email, password, firstName, lastName } = req.body
            const result = await user({
                method: 'POST',
                headers: {
                    'x-user-id': id,
                    'x-user-role': role
                },
                data: { username, email, password, firstName, lastName }
            })
            if (!newRefreshToken) {
                if (!newAccessToken) {
                    res.status(result.status).json({ ...result.data })
                } else {
                    res.status(result.status).json({ ...result.data, newAccessToken })
                }
            } else {
                res.status(result.status).json({ ...result.data, newAccessToken, newRefreshToken })
            }
        } catch ({ response }) {
            let { status } = response
            let { data: { message } } = response

            next({
                status,
                message
            })
        }
    }

    static async updateUser(req, res, next) {
        try {
            const { newAccessToken, newRefreshToken } = req
            const { id: userId, role } = req.user
            const id = req.params.id
            const { username, email, password, firstName, lastName } = req.body
            const result = await user({
                method: 'PUT',
                url: `/${id}`,
                headers: {
                    'x-user-id': userId,
                    'x-user-role': role
                },
                data: { username, email, password, firstName, lastName }
            })
            if (!newRefreshToken) {
                if (!newAccessToken) {
                    res.status(result.status).json({ ...result.data })
                } else {
                    res.status(result.status).json({ ...result.data, newAccessToken })
                }
            } else {
                res.status(result.status).json({ ...result.data, newAccessToken, newRefreshToken })
            }
        } catch ({ response }) {
            let { status } = response
            let { data: { message } } = response

            next({
                status,
                message
            })
        }
    }

    static async deleteUser(req, res, next) {
        try {
            const { newAccessToken, newRefreshToken } = req
            const {id: userId, role} = req.user
            const id = req.params.id
            const result = await user({
                method:'DELETE',
                url: `/${id}`,
                headers: {
                    'x-user-id': userId,
                    'x-user-role': role
                }
            })
            if (!newRefreshToken) {
                if (!newAccessToken) {
                    res.status(result.status).json({ ...result.data })
                } else {
                    res.status(result.status).json({ ...result.data, newAccessToken })
                }
            } else {
                res.status(result.status).json({ ...result.data, newAccessToken, newRefreshToken })
            }
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

module.exports = UserController
