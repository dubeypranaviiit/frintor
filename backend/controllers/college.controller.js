const College = require("../models/college.model");
const Course = require("../models/course.model");
const Cutoffs = require("../models/cutoffs.model");
const CollegeData = require("../CollegeData.json");
const Btech = require("../models/btech.model");
const CollegeDummy = require("../models/collegedummy.model");

const {
  successresponse,
  errorresponse,
  catchresponse,
} = require("../utils/response");


const getCollegeDummy = async (req, res) => {
  try {
   
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const type = req.query.type;
    console.log(type);

  
    const offset = (page - 1) * limit;

    
    const total = await CollegeDummy.find({'courses.type':type}).countDocuments();

    
    const colleges = await CollegeDummy.find({'courses.type':type}).skip(offset).limit(limit);

    if (!colleges || colleges.length === 0) {
      return errorresponse(res, 200, "Colleges not found");
    }

    
    const pagination = {
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      pageSize: limit,
    };

    return successresponse(res, { colleges, pagination }, "Colleges fetched successfully");
    // return successresponse(res, colleges, "Colleges fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};


const getColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    if (!colleges) {
      return errorresponse(res, 200, "Colleges not found");
    }
    return successresponse(res, colleges, "Colleges fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

const getCollegebyName = async (req, res) => {
  try {
    const colleges = await College.find({ collegename: req.params.name });
    if (!colleges) {
      return errorresponse(res, 200, "No colleges found");
    }
    return successresponse(res, colleges, "Colleges fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

const allCollegename = async (req, res) => {
  try {
    const colleges = await College.find({}, { collegename: 1 });
    if (!colleges) {
      return errorresponse(res, 200, "No colleges found");
    }
    return successresponse(res, colleges, "Colleges fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

const allCollegenamedummy = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const searchTerm = req.query.searchTerm ? req.query.searchTerm.toLowerCase() : '';

    const total = await CollegeDummy.countDocuments({
      collegename: { $regex: searchTerm, $options: 'i' } // Case-insensitive search
    });

    const colleges = await CollegeDummy.find({
      collegename: { $regex: searchTerm, $options: 'i' }
    }, { collegename: 1 }).skip((page - 1) * limit).limit(limit);

    if (!colleges || colleges.length === 0) {
      return errorresponse(res, 200, "No colleges found");
    }

    const pagination = {
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      pageSize: limit,
    };

    return res.status(200).json({
      success: true,
      message: "Colleges fetched successfully",
      data: { colleges, pagination },
    });
  } catch (error) {
    // Handle error
    return errorresponse(res, 500, "Internal Server Error");
  }
};


const insertCollege = async (req, res) => {
  try {
    const college = CollegeData;
    const insertedCollege = [];
    for (let i = 0; i < college.length; i++) {
      let courses = college[i].courses;
      // filter course from college object
      delete college[i].courses;
      // create college object
      const newCollege = new College(college[i]);
      for (let j = 0; j < courses.length; j++) {
        for (let k = 0; k < courses[j].branches.length; k++) {
          courses[j].branches[k].coursename = courses[j].coursename;
          let cutoffyear = courses[j].branches[k].cutoff;
          delete courses[j].branches[k].cutoff;
          courses[j].branches[k].college = {};
          courses[j].branches[k].college.id = newCollege._id;
          courses[j].branches[k].college.name = newCollege.collegename;
          const newCourse = new Course(courses[j].branches[k]);
          newCollege.courses.push({
            id: newCourse._id,
            coursename: newCourse.coursename,
            branchname: newCourse.branchname,
          });

          for (let l = 0; l < cutoffyear.length; l++) {
            let round = cutoffyear[l].rounds;
            for (let m = 0; m < round.length; m++) {
              round[m].college = {};
              round[m].college.id = newCollege._id;
              round[m].college.name = newCollege.collegename;
              round[m].course = {};
              round[m].course.id = newCourse._id;
              round[m].course.coursename = newCourse.coursename;
              round[m].course.branchname = newCourse.branchname;
              round[m].year = cutoffyear[l].year;
              const newCutoff = new Cutoffs(round[m]);
              newCourse.cutoffs.push({
                id: newCutoff._id,
                year: newCutoff.year,
                round: newCutoff.round,
              });
              await newCutoff.save();
            }
          }
          await newCourse.save();
        }
      }
      await newCollege.save();
      insertedCollege.push(newCollege);
    }
    return successresponse(res, insertedCollege, "College added successfully");
  } catch (error) {
    // console.log(error);
    return catchresponse(res);
  }
};

const getCollegebyId = async (req, res) => {
  try {
    const courses = [];
    const cutoffs = [];
    const college = await College.findOne({ _id: req.params.id });
    if (college.length === 0) {
      return errorresponse(res, 200, "No college found");
    }
    for (let i = 0; i < college.courses.length; i++) {
      let course = await Course.findOne(
        { _id: college.courses[i].id },
        { college: 0 }
      );
      const cuts = course.cutoffs;
      const temp = course.toObject();
      delete temp.cutoffs;
      courses.push(temp);
      for (let j = 0; j < cuts.length; j++) {
        const cutoff = await Cutoffs.findOne(
          { _id: cuts[j].id, round: 1, year: 2023 },
          { college: 0  }
        );
        if (cutoff) {
          cutoffs.push(cutoff);
        }
      }
    }
    const collegedata = college.toObject();
    delete collegedata.courses;
    collegedata.courses = courses;
    collegedata.cutoffs = cutoffs;
    
    // console.log(collegedata);
    return successresponse(res, collegedata, "College fetched successfully");
    // data = {
    //   college: college,
    //   courses: courses,
    //   cutoffs: cutoffs,
    // };
    // return successresponse(res, data, "College fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};



const getCollegebyIddummy = async (req, res) => {
  try {
    const courses = [];
    const cutoffs = [];
    const college = await CollegeDummy.findOne({ _id: req.params.id });
    if (college.length === 0) {
      return errorresponse(res, 200, "No college found");
    }
       
     
    
    const collegedata = college.toObject();
    collegedata.cutoffs = cutoffs;
    
    // console.log(collegedata);
    return successresponse(res, collegedata, "College fetched successfully");
    // data = {
    //   college: college,
    //   courses: courses,
    //   cutoffs: cutoffs,
    // };
    // return successresponse(res, data, "College fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

const collegesByRanking = async (req, res) => {
  try {
    const colleges = await College.find().sort({ ranking: 1 });
    if (!colleges) {
      return errorresponse(res, 200, "No colleges found");
    }
    return successresponse(res, colleges, "Colleges fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

const collegeSearchCount = async (req, res) =>{
  try{
    const id = req.body.id;
    const college = await College.findOne({_id: id});
    college.searchcount = college.searchcount + 1;
  }
  catch(error){
    return catchresponse(res);
  }
}

const collegeBySearchCount = async (req, res) => {
  try{
    const colleges = await College.find().sort({searchcount: 1});
    if(!colleges){
      return errorresponse(res, 200, "No colleges found");
    }
    return successresponse(res, colleges, "Colleges fetched successfully");
  }
  catch(error){
    return catchresponse(res);
  }
};

const getBtechCollege = async (req, res) => {
  try {
    const colleges = await Btech.find();
    if (colleges.length === 0) {
      return errorresponse(res, 200, "Colleges not found");
    }
    return successresponse(res, colleges, "Colleges fetched successfully");
  } catch (error) {
    return catchresponse(res);
  }
};

module.exports = {
  getColleges,
  getCollegebyName,
  allCollegename,
  insertCollege,
  getCollegebyId,
  collegesByRanking,
  collegeSearchCount,
  collegeBySearchCount,
  getBtechCollege,
  getCollegeDummy,
  allCollegenamedummy,
  getCollegebyIddummy
};
