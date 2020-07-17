const db = require("../../../../server/models/models");
//const app = require("express");

const controller = {

  tripDetails: function ({ body, params }, res) {
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
    db.Trip.create(body)
      .then(dbTrip => {
        console.log(dbTrip);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }

}


module.exports = controller;
