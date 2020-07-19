const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  destination: {
    type: String,
    unique: true
  },
  Name: { type: String, required: false },
  overallBudget: { type: String, required: false },
  spentBudget: { type: String, required: false },
  destintion: { type: String, required: false },
  startDate: { type: String, required: false },
  endDate: { type: String, required: false },
  transporation: [
    {
      type: Schema.Types.ObjectId,
      ref: "TransCard"
    }
  ],
  refreshment: [
    {
      type: Schema.Types.ObjectId,
      ref: "RefreshCard"
    }
  ],
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "ActiveCard"
    }
  ],
  budget: [
    {
      type: Schema.Types.ObjectId,
      ref: "BudgetCard"
    }
  ],
  lodging: [
    {
      type: Schema.Types.ObjectId,
      ref: "LodgingCard"
    }
  ]
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
