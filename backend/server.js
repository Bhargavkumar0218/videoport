const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config");

const authRoutes = require("./routes/auth");
const videoRoutes = require("./routes/videos");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/videos", videoRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

