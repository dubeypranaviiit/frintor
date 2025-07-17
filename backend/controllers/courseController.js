const Course = require("../models/course.model");
const {
  successresponse,
  errorresponse,
  catchresponse,
} = require("../utils/response");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    if (!courses) {
      com;
    }
    return successresponse(res, courses, "Courses fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

const getCoursebyName = async (req, res) => {
  try {
    const courses = await Course.find({ coursename: req.params.name });
    if (!courses) {
      return errorresponse(res,200, "No courses found");
    }
    return successresponse(res, courses, "Courses fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

const allCoursename = async (req, res) => {
  try {
    const courses = await Course.find({}, { coursename: 1, _id: 0 });

    if (!courses || courses.length === 0) {
      return errorresponse(res,200, "No courses found");
    }

    const uniqueCourses = [
      ...new Set(courses.map((course) => course.coursename)),
    ];
    return successresponse(res, uniqueCourses, "Courses fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

module.exports = {
  getCourses,
  getCoursebyName,
  allCoursename,
};
