const mongoose = require("mongoose");
const { Schema } = mongoose;

const collegeSchema = new Schema({
  collegename: {
    type: String,
  },
  address: {
    type: String,
  },
  image: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  contact: {
    type: Number,
  },
  email: {
    type: String,
  },
  website: {
    type: String,
  },
  approvedaurthority: {
    type: String,
  },
  userrating: {
    type: Number,
  },
  totalrating: {
    type: Number,
  },
  hostel: {
    type: Boolean,
  },
  startupincubation: {
    type: Boolean,
  },
  sports: {
    type: Boolean,
  },
  reviews: {
    type: String,
  },
  collegeranking: {
    type: Number,
  },
  collegerankingframework: {
    type: String,
  },
  searchcount: {
    type: Number,
    default: 0,
  },
  courses: [
    {
      id: { type: Schema.Types.ObjectId, ref: "Course" },
      coursename: { type: String },
      branchname: { type: String },
    },
  ],
});

const College = mongoose.model("College", collegeSchema);

module.exports = College;
