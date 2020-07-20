const mongoose = require("mongoose");
const db = require("../server/models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mern_auth"
);

const tripsSeed = [

  {
    "transporation" : [ 
    ],
    "refreshment" : [ 
    ],
    "activities" : [ 
    ],
    "budget" : [],
    "lodging" : [],
    "Name" : "Value",
    "overallBudget" : "1000",
    "spentBudget" : "600",
    "destination" : "Atx",
    "startDate" : "dsjghc",
    "endDate" : "dflhvli",
    "__v" : 0
},

];

db.Trips
  .remove({})
  .then(() => db.Trips.collection.insertMany(tripsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
