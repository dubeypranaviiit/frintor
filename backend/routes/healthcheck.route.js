// import { Router } from "express";
const express = require('express');
const router = express.Router();

// import {
//   healthCheckService
// } from "../controllers/healthcheck.controller.js";
const {healthCheckService}  = require('../controllers/healthcheck.controller');

// const router = Router();

router.get("/", healthCheckService);

// export default router;

module.exports = router;
