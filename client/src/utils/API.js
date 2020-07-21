import axios from "axios";

//axios.defaults.baseURL="http://localhost:3001"

export default {

  // Saves a card to the database
  saveCard: function (cardData) {
    console.log(cardData, "saveTrip");
    const { type } = cardData;
    let model = "";
    console.log(type)
    switch (type) {
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
    console.log(cardData, "createTrip")
    return axios.post("/cards", cardData);
  },

  trip: function (cardData) {
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
};