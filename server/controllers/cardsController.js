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
  // db.Trip.find({})
  // .sort({ _id })
  //   .then(dbTrip => {
  //     console.log(dbTrip);
  //   res.json(dbTrip);
  // })
  // .catch(err => {
  //   res.status(400).json(err);
  // });
}

}
  

module.exports = controller;
