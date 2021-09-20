const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

// MongoDB Connection
mongoose.connect(process.env.MONGOBD_URI || "mongodb://localhost/workout", { useNewUrlParser: true});



app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}!`);
  });