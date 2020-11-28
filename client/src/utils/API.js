import axios from "axios";

export default {
  //search googlebooks
  searchTerms: function(query) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q="+ query + "&key=AIzaSyA7iVYMNwruOcHhmWWK5CCXQRDydPgHAjE"
    );
  },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
