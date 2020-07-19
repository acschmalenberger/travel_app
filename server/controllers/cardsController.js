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


  }




}


module.exports = controller;
