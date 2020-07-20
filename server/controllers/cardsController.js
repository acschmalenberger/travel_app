const db = require("../models");
//const app = require("express");

const controller = {

  tripDetails: function ({body, params} , res) {

    console.log("body", body);
    console.log("params", params);
    const transObject = { ...body };
    const {tripId, type } = transObject;
    delete transObject.tripId;
    delete transObject.type;
    console.log("transObject", transObject);
    let modelType = "";

    switch(params.card) {
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

    db[params.card].create(transObject)
    .then(({ _id }) => db.Trip.findOneAndUpdate({_id: tripId}, { $push: { [modelType]: _id } }, { new: true }))
      .then(dbTrip => {
        res.json(dbTrip);
      })
      .catch(err => {
        res.json(err);
      });
  },

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


findOne: async function ({ body, params }, res) {
  console.log(body, params);

  try {
    const trips = await db.Trip.findOne({ _id: params.id }).sort({ spentBudget: 1 }).populate("transporation").populate("budget").populate("refreshment").populate("activities").populate("lodging");
    console.log("trips", trips);
    res.json(trips);
  } catch(err) {
    console.log("trips", err);
    res.status(400).json(err);
  } 
},

  create: function ({ body, user }, res) {

    // body.userEmail = user.email
    console.log(body);
    db.BudgetCard.create(body)
      .then(newCard => {
        return res.status(200).json(newCard);
      }).catch(err => {

        return res.status(500).json(err);
      })


  },

  findAll: function (req, res) {
    db.BudgetCard.where({
      userEmail: req.query.userEmail
    }).then(cards => {
      return res.status(200).json(cards);
    })


  },
  getAllChartData: function (req, res) {
    console.log("inside card controller")
    db.Trip.find({
     
    })
    .then(function(results) {
      console.log("findall finished")
      console.log(results);
      res.json(results);
    });


  }





}


module.exports = controller;
