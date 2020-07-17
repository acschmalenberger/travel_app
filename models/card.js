const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  Name:{type: String, required: false},
  Budget: { type: String, required: false },
  Date: { type: String, required: false },
  Address: { type: String, required: false },
  Time: { type: String, required: false },
  Notes: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Card = mongoose.model("card", cardSchema);

module.exports = Card;
