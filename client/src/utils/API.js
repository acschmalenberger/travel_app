import axios from "axios";

export default {
  // Gets all books
  getCardInfo: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getCards: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteCard: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveCard: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
