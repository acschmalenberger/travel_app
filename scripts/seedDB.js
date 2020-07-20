const mongoose = require("mongoose");
const db = require("../server/models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/mern-auth'
);

const tripsSeed = [

  {
    "_id" : ObjectId("5f145b2a970b66142c8b0400"),
    "transporation" : [ 
        ObjectId("5f14a5b964f12b1fa52ed5f6"), 
        ObjectId("5f14a5ef64f12b1fa52ed5f7"), 
        ObjectId("5f14a70a4548e71febda5ff7"), 
        ObjectId("5f14a75f4548e71febda5ff8")
    ],
    "refreshment" : [ 
        ObjectId("5f14b48b688b1120254d0315")
    ],
    "activities" : [ 
        ObjectId("5f14b49c688b1120254d0316")
    ],
    "budget" : [],
    "lodging" : [ 
        ObjectId("5f14a84a688b1120254d0312"), 
        ObjectId("5f14b3c1688b1120254d0313"), 
        ObjectId("5f14b3c7688b1120254d0314")
    ],
    "Name" : "Value",
    "overallBudget" : "1000",
    "spentBudget" : "600",
    "destination" : "Atx",
    "startDate" : "dsjghc",
    "endDate" : "dflhvli",
    "__v" : 0
}

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
