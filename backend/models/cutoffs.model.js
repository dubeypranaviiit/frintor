const mongoose = require("mongoose");
const { Schema } = mongoose;
const gender ={
  male: {
    type: Number,
  },
  female: {
    type: Number,
  },
};

const cutoffsSchema = new Schema({
  college: {
    id: { type: Schema.Types.ObjectId, ref: "College" },
    name: { type: String },
  },
  course: {
    id: { type: Schema.Types.ObjectId, ref: "Course" },
    coursename : { type: String },
    branchname : { type: String },
  },
  year: {
    type: Number,
  },
  round: {
    type: Number,
  },
  general: gender,
  sc: gender,
  st: gender,
  ews: gender,
  obc: gender,
  ews: gender,
});

const Cutoffs = mongoose.model("Cutoffs", cutoffsSchema);

module.exports = Cutoffs;