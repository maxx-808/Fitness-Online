const db = require("../models/workout");
const mongoose = require("mongoose");

module.exports = (app) => {
  app.post("/api/workouts", (req, res) => {
    db.create({
      day: new Date(),
    })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("api/workouts err: ", err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    console.log("req.body line 14= ", req.body);
    db.findByIdAndUpdate(
      req.params.id,
      {
        $push: { exercises: req.body },
      },
      { new: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("api/workouts/:id err: ", err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.find({})
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("api/workouts/range err: ", err);
      });
  });

  app.get("/api/workouts", (req, res) => {
    db.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        console.log("find data= ", data);
        res.json(data);
      }
    });
  });
};
