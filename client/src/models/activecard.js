const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitiesSchema = new Schema({
  Name:{type: String, required: false},
  Budget: { type: String, required: false },
  Date: { type: String, required: false },
  Address: { type: String, required: false },
  Time: { type: String, required: false },
  Notes: { type: String, required: false }
});

const ActiveCard = mongoose.model("ActiveCard", activitiesSchema);

module.exports = ActiveCard;
