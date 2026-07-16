// Helper function to success response
const successResponse = (res, statusCode = 200, data) => {
    return res.status(statusCode).json({ status: statusCode, success: true, data })
}

// Helper function to error response
const errorResponse = (res, statusCode, data, message) => {

    return res.status(statusCode).json({ erroe: message, status: statusCode = 500, success: false, data })
}

module.exports = {
    successResponse,
    errorResponse
}