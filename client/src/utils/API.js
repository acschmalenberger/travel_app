import axios from "axios";

export default {

  // Saves a card to the database
  saveCard: function(cardData) {
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
    return axios.post("/cards", cardData);
  },

  trip: function (cardData) {
    return axios.post("/submit", cardData);
  },

  findOne: function(tripId) {
    return axios.get(`/submit/${tripId}`);
  },

findAll: function(itinerary) {
  return axios.get(`/api/findAll?email=${itinerary}`, itinerary)
}
};