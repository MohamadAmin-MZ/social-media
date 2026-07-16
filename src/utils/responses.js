// Helper function to success response
const successResponse = (res, statusCode = 200, data) => {
    return res.status(statusCode).json({ status: statusCode, success: true, data = null })
}

// Helper function to error response
const errorResponse = (res, statusCode, data, message) => {
    console.log({ message, data }); // log error details

    return res.status(statusCode).json({ status: statusCode = 500, success: false, data = null, erroe: message })
}

module.exports = {
    successResponse,
    errorResponse
}