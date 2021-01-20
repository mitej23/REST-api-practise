require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const axios = require("./axios");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const fundsRouter = require("./routes/funds");

app.use("/funds", fundsRouter);

// app.use("/", axios);

app.listen(5000, () => console.log("server started at port 5000"));
