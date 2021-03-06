const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const htmlRoute = require("./routes/html-routes");
const apiRoute = require("./routes/api-routes");
const PORT = process.env.PORT || 3000;
const app = express();
const dotenv = require("dotenv").config();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

htmlRoute(app);
apiRoute(app);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected", process.env.MONGODB_URI));

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
