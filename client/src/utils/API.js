import axios from "axios";

//axios.defaults.baseURL="http://localhost:3001"

export default {

  // Saves a card to the database
  saveCard: function (cardData, model) {
    console.log(cardData)
    return axios.post("/submit/" + model, cardData);
  },

  createTrip: function (cardData, model) {
    console.log(cardData + "createTrip")
    return axios.post("/submit/", cardData);

  },


  getCards: function () {

    return axios.get("/cards");
  }
};
