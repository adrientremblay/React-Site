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
const postsRouter = require("./routes/api/posts");
app.use("/api/posts", postsRouter);

// Serve static assets if in production
if (process.env.NODE_ENV == "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
