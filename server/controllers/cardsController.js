const db = require("../models");
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
  },

  findAll: function ({ user }, res) {
    // db.budgetCard.where()
    return res.json([]);
  },

  create: function ({ user, body }, res) {
    db.budgetCard.create({
      overallBudget: body.overallBudget,
      destination: body.destination,
      starteDate: body.starteDate,
      endDate: body.endDate,
      email: user.email


    }, function (err, card) {

      return res.json(card);
    })

  }


}


module.exports = controller; 
