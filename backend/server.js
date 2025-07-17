const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const connectDB = require("./config/db");

const collegeRoutes = require("./routes/college.route");
const courseRoutes = require("./routes/course.route");
const cutoffsRoutes = require("./routes/cutoffs.route");
const chatRoutes = require('./routes/chatRoutes');
const healthCheckRoutes = require('./routes/healthcheck.route');
const authRoutes = require('./routes/auth.route');

connectDB();

app.use(cors());
app.use(express.json());

app.use("/colleges", collegeRoutes);
app.use("/courses", courseRoutes);
app.use("/cutoffs", cutoffsRoutes);
app.use('/api', chatRoutes);
app.use('/healthcheck', healthCheckRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
