const router = require("express").Router();
const { Workout } = require("../models");

router.post ("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then((dbWorkout) =>{
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
      });
  });

  router.put("/api/Workouts/:id", (req,res) => {
      Workout.findByIdAndUpdate(
        {
            _id: req.params.id
        },
        {
            $push: {
                exercises: req.body
            }
        }
      )
        .then((dbWorkout) =>{
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
  });

  router.get("/api/Workouts", (req,res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) =>{
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
  });

  router.get("/api/Workouts/range", (req,res) => {
    Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
  });
  
  module.exports = router;