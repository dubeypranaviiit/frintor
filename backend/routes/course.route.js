const express = require('express');
const router = express.Router();

const { getCourses,getCoursebyName,allCoursename} = require('../controllers/courseController');
router.get('/', getCourses);
router.get('/allcoursename', allCoursename);
router.get('name/:name', getCoursebyName);

module.exports = router;