const db = require("../models");
const mongoose = require("mongoose");

module.exports = (app) => {
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((data) => res.json())
      .catch((err) => {
        console.log("api/workouts err: ", err);
      });
  });

  app.put("/api/workouts/:id");
};
