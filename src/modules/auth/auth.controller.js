const userModel = require("../../models/user")
const { errorResponse, successResponse } = require("../../utils/responses")


const register = async (req, res) => {
    try {
        const { email, username, name, password } = req.body

        const isUserExisted = await userModel.findOne({ $or: [{ email }, { username }] })
        if (isUserExisted) {

            req.flash("error", "Email or username already existed.")
            return res.redirect(req.get("Referer"));

            // return errorResponse(res, 400, isUserExisted, "Email or username already existed.")
        }

        const isFirstUser = (await userModel.countDocuments()) === 0
        let role = "USER"
        if (isFirstUser) {
            role = "ADMIN"
        }

        const user = await userModel.create({ email, username, name, password, role })

        req.flash("success", "you was sign up successed👍.")
        return res.redirect(req.get("Referer"));

        // return successResponse(res, 201, user)

    } catch (error) {
        return console.log(error);
    }
}

const renderRegisterPage = async (req, res) => {
    return res.render("../views/Pages/Auth/Register/register")
}

module.exports = {
    register,
    renderRegisterPage
}