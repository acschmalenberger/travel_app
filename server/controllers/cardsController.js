const db = require("../models");
//const app = require("express");

const controller = {

<<<<<<< HEAD
  tripDetails: async function ({ body, params }, res) {

    console.log("body", body);
    console.log("params", params);
=======
  tripDetails: async function ({body, params} , res) {
>>>>>>> 24a21538d32a9b462fd2e00c08865220307b71e4
    const transObject = { ...body };
    const { tripId, type } = transObject;
    delete transObject.tripId;
    delete transObject.type;
    let modelType = "";

    switch (params.card) {
      case "TransCard":
        modelType = "transporation";
        break;
      case "ValueCard":
        modelType = "budget";
        break;
      case "RefreshCard":
        modelType = "refreshment";
        break;
      case "ActiveCard":
        modelType = "activities";
        break;
      case "LodgingCard":
        modelType = "lodging";
        break;
    }
    const trip = await db.Trip.findOne({ userEmail: tripId })
    trip[modelType].push(transObject)
    trip.save()
    res.json(trip)
  },

<<<<<<< HEAD
  createTrip: function ({ body }, res) {
    console.log(body);
    db.Trip.create(body)
      .then(db.ValueCard.create(body))
      .then(dbTrip => {
        res.json(dbTrip);
      })
      .catch(({ message }) => {
        res.json(message)
      });
  },

  trip: function ({ body }, res) {
    console.log(body);
    db.Trip.create(body)
      .then(db.BudgetCard.create(body))
      .then(dbTrip => {
        res.json(dbTrip);
      })
      .catch(({ message }) => {
        res.json(message)
      });
  },

  findOne: async function ({ body, params }, res) {
    console.log(body, params);

    try {
      const trips = await db.Trip.findOne({ userEmail: params.id }).sort({ spentBudget: 1 }).populate("transporation").populate("budget").populate("refreshment").populate("activities").populate("lodging");
      console.log("trips", trips);
      res.json(trips);
    } catch (err) {
      console.log("trips", err);
      res.status(400).json(err);
    }
  },
=======
createTrip: function ({ body }, res) {
  db.Trip.create(body)
  .then(db.ValueCard.create(body))
  .then(dbTrip => {
    res.json(dbTrip);
  })
  .catch(({ message }) => {
    res.json(message)
  });
},

trip: function ({ body }, res) {
  db.Trip.create(body)
  .then(db.BudgetCard.create(body))
  .then(dbTrip => {
    res.json(dbTrip);
  })
  .catch(({ message }) => {
    res.json(message)
  });
},

findOne: async function ({ body, params }, res) {
  console.log(body, params);

  try {
    const trips = await db.Trip.findOne({ userEmail: params.id }).sort({ spentBudget: 1 }).populate("transporation").populate("budget").populate("refreshment").populate("activities").populate("lodging");
    res.json(trips);
  } catch(err) {
    console.log("trips", err);
    res.status(400).json(err);
  } 
},
>>>>>>> 24a21538d32a9b462fd2e00c08865220307b71e4

  create: function ({ body, user }, res) {

    // body.userEmail = user.email
    console.log(body, "goodbye");
    db.BudgetCard.create(body, "boat")
      .then(newCard => {
        db.Trip.create(body)
          .then(data => {
            return res.status(200).json(newCard);
          })
        return res.status(200).json(newCard);
      }).catch(err => {

        return res.status(500).json(err);
      })


  },

  findAll: function (req, res) {
    db.Trip.where({
      userEmail: req.query.email
    }).then(cards => {
      console.log("FIND ALL", cards)
      return res.status(200).json(cards);
    })


  },
  getAllChartData: function (req, res) {
    db.Trip.find({
<<<<<<< HEAD

=======
  
>>>>>>> 24a21538d32a9b462fd2e00c08865220307b71e4
    })
      .then(function (results) {
        console.log("findall finished")
        console.log(results);
        res.json(results);
      });


  }





}


module.exports = controller;