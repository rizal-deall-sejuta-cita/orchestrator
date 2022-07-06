const errorHandler = async (err, req, res, next) => {
    if (err) {
        let code = err.status
        let message = err.message

        res.status(code).json({ message })
    }

}

module.exports = { errorHandler }
