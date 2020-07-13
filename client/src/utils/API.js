import axios from "axios";

export default {
  // Gets all books
  getCardInfo: function() {
    return axios.get("/api/cards");
  },
  // Gets the book with the given id
  getCards: function(id) {
    return axios.get("/api/cards/" + id);
  },
  // Deletes the book with the given id
  deleteCard: function(id) {
    return axios.delete("/api/cards/" + id);
  },
  // Saves a book to the database
  saveCard: function(cardData) {
    return axios.post("/api/cards", cardData);
  }
};
