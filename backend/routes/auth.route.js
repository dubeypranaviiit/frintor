const express = require("express");
const { signUp, getProfile, login, logout, refreshAccessToken, changeCurrentPassword, forgotPassword, resetPassword } = require("../controllers/auth.controller.js");
const { isLoggedIn } = require("../middlewares/auth.middleware.js");

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/logout", isLoggedIn, logout);
router.get("/profile", isLoggedIn, getProfile);
router.post("/refresh-token", refreshAccessToken);
router.post("/change-password", isLoggedIn, changeCurrentPassword);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token/", resetPassword);

module.exports = router;