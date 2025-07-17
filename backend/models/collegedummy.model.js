const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseDummySchema = new Schema({
  type: String,
  course: String,
});

const CollegeDummySchema = new Schema({
  collegename: { type: String, required: true },
  gendersaccepted: { type: String, required: true },
  campussize: { type: String, required: true },
  totalstudentenrollments: { type: Number, required: true },
  totalfaculty: { type: Number, required: true },
  establishedyear: { type: Number, required: true },
  rating: { type: Number, required: true },
  university: { type: String, default: "" },
  courses: [CourseDummySchema],
  facilities: { type: [String], required: true },
  city: { type: String, required: true },
  State: { type: String, required: true },
  country: { type: String, required: true },
  collegetype: { type: String, required: true },
  averagefees: { type: Number, required: true },
});

const CollegeDummy = mongoose.model("CollegeDummy", CollegeDummySchema);

module.exports = CollegeDummy;
