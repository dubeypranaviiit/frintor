const User = require("../models/auth.schema.js");
const JWT = require("jsonwebtoken");
const { asyncHandler } = require("../utils/asyncHandler.js");
const config = require("../config/index.js");

exports.isLoggedIn = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
    if (!token) {
      return res
      .status(401)
      .json({
        success: false,
        message: "Please login to access the resource"
      });
    }
    
    try {
      const decodedJWTPayload = JWT.verify(token, config.JWT_SECRET);
      req.user = await User.findById(decodedJWTPayload?._id, 
        "name email phoneNumber is_active is_paid"
      );
      next();
    } catch (error) {
      return res
      .status(401)
      .json({
        success: false,
        message: "Not authorized to access this resource"
      });
    }
});