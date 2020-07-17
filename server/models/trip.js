const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
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
      ref: "ValueCard"
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
