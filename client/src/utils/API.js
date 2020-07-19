import axios from "axios";

//axios.defaults.baseURL="http://localhost:3001"

export default {

  // Saves a card to the database
  saveCard: function (cardData, model) {
    console.log(cardData, "saveTrip")
    return axios.post("/submit/" + model, cardData);
  },

  createTrip: function (cardData) {
    console.log(cardData, "createTrip")
    return axios.post("/cards", cardData);
  },

  findOne: function (cardData) {
    console.log("Loading the Budget Data", cardData)
    return axios.get("/cards?userEmail=" + cardData.userEmail);
  }
};
