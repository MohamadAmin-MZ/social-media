const express = require("express")
const authcontroller = require("./auth.controller")
const authValidatoin = require("../auth/auth.validation")
const validationResult = require("../../middlewares/validationResult")


const router = express.Router()

router.post("/register", validationResult(authValidatoin.registerSchema), authcontroller.register)

module.exports = router