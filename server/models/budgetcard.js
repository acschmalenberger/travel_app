const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const valueSchema = new Schema({
  Name: { type: String, required: false },
  overallBudget: { type: String, required: false },
  spentBudget: { type: String, required: false },
  destintion: { type: String, required: false },
  startDate: { type: String, required: false },
  endDate: { type: String, required: false },
  userEmail: { type: String, required: false }
});

const BudgetCard = mongoose.model("BudgetCard", valueSchema);

module.exports = BudgetCard;
