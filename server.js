const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// const htmlRoute = require("./routes/html-routes");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// htmlRoute(app);
app.use(require("./public/api.js"));

mongoose.connect(process.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
