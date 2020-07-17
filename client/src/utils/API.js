import axios from "axios";
//axios.defaults.baseURL="http://localhost:3001"

export default {
  // Gets all cards
  getCardInfo: function() {
    return axios.get("/api/cards");
  },
  // Gets the card with the given id
  getCards: function(id) {
    return axios.get("/api/cards/" + id);
  },
  // Deletes the card with the given id
  deleteCard: function(id) {
    return axios.delete("/api/cards/" + id);
  },
  // Saves a card to the database
  saveCard: function(cardData) {
    console.log(cardData)
    return axios.post("/api/cards", cardData);
  }
};
