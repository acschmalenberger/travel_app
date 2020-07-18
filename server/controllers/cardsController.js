const db = require("../models");
//const app = require("express");

const controller = {

  tripDetails: function ({body, params} , res) {
    db[params.card].create(body)
    .then(({ _id }) => db.Trip.findOneAndUpdate({}, { $push: { [params.card]: _id } }, { new: true }))
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


findOne: function ({ body, params }, res) {
  console.log(body, params);
  db.Trip.find({})
  .sort({ _id })
  .then(dbTrip => {
    res.json(dbTrip);
  })
  .catch(err => {
    res.status(400).json(err);
  });
}

}
  

module.exports = controller;
