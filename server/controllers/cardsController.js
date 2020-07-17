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
  .then(dbTrip => {
    res.json(dbTrip);
  })
  .catch(({ message }) => {
    console.log(message);
    res.json(message)
  });
}

}
  

module.exports = controller;
