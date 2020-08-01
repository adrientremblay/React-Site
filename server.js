const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// ENV
require("dotenv").config();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// APP
const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
