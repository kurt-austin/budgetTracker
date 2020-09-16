const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// const PORT = 3000;

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use(require("./routes/api.js"));



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/budget", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

}
);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});