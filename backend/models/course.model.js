const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
  coursename: {
    type: String,
  },
  branchname: {
    type: String,
  },
  duration: {
    type: Number,
  },
  eligibility: {
    type: String,
  },
  fee: {
    type: Number,
  },
  college: {
    id: { type: Schema.Types.ObjectId, ref: "College" },
    name: { type: String },
  },
  ranking: {
    type: Number,
  },
  rankingframework: {
    type: String,
  },
  totalseats: {
    type: Number,
  },
  highestsalary: {
    type: Number,
  },
  averagesalary: {
    type: Number,
  },
  cutoffs: [
    {
      id: { type: Schema.Types.ObjectId, ref: "Cutoffs" },
      year: { type: Number },
      round: { type: Number },
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
