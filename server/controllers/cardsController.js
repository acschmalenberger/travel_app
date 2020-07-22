const db = require("../models");
//const app = require("express");

const controller = {

  tripDetails: async function ({ body, params }, res) {
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
    } catch (err) {
      console.log("trips", err);
      res.status(400).json(err);
    }
  },

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

    })
      .then(function (results) {
        console.log("findall finished")
        console.log(results);
        res.json(results);
      });


  }





}


module.exports = controller; git 