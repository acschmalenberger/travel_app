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
  userEmail: { type: String, required: false },
  transporation: [
    {
      Name:{type: String, required: false},
      Budget: { type: String, required: false },
      Date: { type: String, required: false },
      Address: { type: String, required: false },
      Time: { type: String, required: false },
      Notes: { type: String, required: false },
    }
  ],
  refreshment: [
    {
      Name:{type: String, required: false},
      Budget: { type: String, required: false },
      Date: { type: String, required: false },
      Address: { type: String, required: false },
      Time: { type: String, required: false },
      Notes: { type: String, required: false },
    }
  ],
  activities: [
    {
      Name: { type: String, required: false },
      Budget: { type: String, required: false },
      Date: { type: String, required: false },
      Address: { type: String, required: false },
      Time: { type: String, required: false },
      Notes: { type: String, required: false },
    }
  ],
  budget: [
    {
      Name: { type: String, required: false },
      overallBudget: { type: String, required: false },
      spentBudget: { type: String, required: false },
      destintion: { type: String, required: false },
      startDate: { type: String, required: false },
      endDate: { type: String, required: false },
      userEmail: { type: String, required: false },
    }
  ],
  lodging: [
    {
      Name:{type: String, required: false},
      Budget: { type: String, required: false },
      Date: { type: String, required: false },
      Address: { type: String, required: false },
      Time: { type: String, required: false },
      Notes: { type: String, required: false },
    }
  ]
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
