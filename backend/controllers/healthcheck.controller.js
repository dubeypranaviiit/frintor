const asyncHandler = require("../utils/asyncHandler").asyncHandler;

const healthCheckService = asyncHandler(async (req, res) => {
    return res
    .status(200)
    .json({ 
        success: true,
        message: "API services are running fine" 
    });
});

module.exports = {
    healthCheckService
};