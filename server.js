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

//Routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}!`);
  });