const mongoose = require("mongoose");
const { Schema } = mongoose;

const btechSchema = new Schema({
  collegename: String,
  location: String,
  state: String,
  approvedauthority: String,
  coursefees: Number,
  feestype: String,
  examtype: String,
  userrating: String,
  totalreviews: Number,
  ranking1: String,
  rankerframework1: String,
  rankinglink1: String,
  ranking2: String,
  rankerframework2: String,
  rankinglink2: String,
  Admission_Info_Link: String,
  Review_Link: String,
  Course_Fees_Link: String,
});

const Btech = mongoose.model("Btech", btechSchema);

module.exports = Btech;
