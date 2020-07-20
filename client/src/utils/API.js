import axios from "axios";


export default {

  // Saves a card to the database
  saveCard: function(cardData) {
    console.log(cardData, "saveTrip");
    const { type } = cardData;
    let model = "";

    switch(type) {
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
    return axios.post("/submit", cardData);
  },

  findOne: function(tripId) {
    console.log("Loading the Budget Data", tripId)
    return axios.get(`/submit/${tripId}`);
  },

  
  findEmail: function (cardData) {
  return axios.get("/cards?userEmail=" + cardData.userEmail);
  },

  getAllData: function(tripId) {
    console.log("API Page", tripId)
    return axios.get(`/submit/${tripId}`)
  }

};
