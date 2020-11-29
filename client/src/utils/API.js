import axios from "axios";
let API_KEY="";
axios.get("/api/get_apikey").then(function (apiKey) {
  API_KEY = apiKey.data;
})

export default {
  //search googlebooks
  searchTerms: function(query) {
    console.log(API_KEY)
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q="+ query + "&key=" + API_KEY
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
