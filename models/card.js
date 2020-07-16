const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  overallBudget: { type: Number, required: true },
  spentBudget: { type: Number, required: false },
  destination: { type: String, required: true },
  travelDates: { type: String, required: false},
  transportBudget: { type: Number, required: false },
  transportDate: { type: Date, required: false },
  transportAddress: { type: String, required: false },
  transportTime: { type: String, required: false },
  transportNotes: { type: String, required: false },
  refreshBudget: { type: Number, required: false },
  refreshDate: { type: Date, required: false },
  refreshAddress: { type: String, required: false },
  refreshTime: { type: String, required: false },
  refreshNotes: { type: String, required: false },
  activitesBudget: { type: Number, required: false },
  activitesDate: { type: Date, required: false },
  activitesAddress: { type: String, required: false },
  activitesTime: { type: String, required: false },
  activitesNotes: { type: String, required: false },
  lodgingBudget: { type: Number, required: false },
  lodgingDates: { type: Date, required: false },
  lodgingAddress: { type: String, required: false },
  lodgingTime: { type: String, required: false },
  lodgingNotes: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Card = mongoose.model("card", cardSchema);

module.exports = Card;
