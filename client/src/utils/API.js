import axios from "axios";

export default {

  // Saves a card to the database
<<<<<<< HEAD
  saveCard: function (cardData) {
    console.log(cardData, "saveTrip");
    const { type } = cardData;
    let model = "";
    console.log(type)
    switch (type) {
=======
  saveCard: function(cardData) {
    const { type } = cardData;
    let model = "";
    switch(type) {
>>>>>>> 24a21538d32a9b462fd2e00c08865220307b71e4
      case "transportObject":
        model = "TransCard";
        break;
      case "budgetObject":
        model = "ValueCard";
        break;
      case "refreshObject":
        model = "RefreshCard";
        break;
      case "activitesObject":
        model = "ActiveCard";
        break;
      case "lodgingObject":
        model = "LodgingCard";
        break;
    }
    return axios.post("/submit/" + model, cardData);
  },

  createTrip: function (cardData) {
    return axios.post("/cards", cardData);
  },

  trip: function (cardData) {
<<<<<<< HEAD
    console.log(cardData, "Trip_New")
    return axios.post("api/submit", cardData);
  },

  findOne: function (tripId) {
    console.log("Loading the Budget Data")
    return axios.get(`/submit/${tripId}`);
  },

  findAll: function (itinerary) {
    console.log("FIND ALL APIjs", itinerary)
    return axios.get(`/api/findAll?email=${itinerary}`, itinerary)
  }
  // getAllChartData: function (){
  //   console.log("get all chart data")
  //   return axios.get("/api/chartdata")
  // }
=======
    return axios.post("/submit", cardData);
  },

  findOne: function(tripId) {
    return axios.get(`/submit/${tripId}`);
  },

findAll: function(itinerary) {
  return axios.get(`/api/findAll?email=${itinerary}`, itinerary)
}
>>>>>>> 24a21538d32a9b462fd2e00c08865220307b71e4
};