const responses = require("../utils/responses")


const resiltValidator = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body)

            next()
        } catch (error) {
            if (error.isJoi) {
                let errors = {}
                error.details.forEach(err => {
                    // errors[err.path[0]] = err.message.replace(/"/g, "")
                    errors["Problem"] = err.message.replace(/"/g, "")
                });

                return responses.errorResponseInview(req, res, 400, null, errors)
            }

            return responses.errorResponse(res, 500, null, error.message)
        }
    }
}

module.exports = resiltValidator