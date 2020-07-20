import axios from "axios";

//axios.defaults.baseURL="http://localhost:3001"

export default {

  // Saves a card to the database
<<<<<<< HEAD
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
=======
  saveCard: function(cardData, model) {
    console.log(cardData, "saveTrip")
    return axios.post("/submit/" + model, cardData);
  },

  createTrip: function(cardData) {
    console.log(cardData, "createTrip")
    return axios.post("/submit/", cardData);
  },

  findOne: function(cardData) {
    console.log("Loading the Budget Data", cardData)
    return axios.get("/submit/:id", cardData);
>>>>>>> a2ec97164456089652ba6dbba52209e808289028
  }
};
