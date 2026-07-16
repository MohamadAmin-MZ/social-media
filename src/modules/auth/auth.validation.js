const joi = require("joi")

const registerSchema = joi.object({
    email: joi.string().email(),
    username: joi.string().min(4).max(20).required(),
    name: joi.string().min(3).max(20).required(),
    password: joi.string().min(8).max(20).required(),
    confirmPassword: joi.any().valid(joi.ref("password")).required()
})

module.exports = {
    registerSchema
}