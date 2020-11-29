const express = require("express");
const path = require("path");
require('dotenv').config();
const PORT = process.env.PORT || 3002;
const app = express();
const mongoose = require("mongoose");
const Book = require("./bookModel");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks", 
                  {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                    useFindAndModify: false
                  }
);

//DB routes
// /api/books (get) - Should return all saved books as JSON.
app.get("/api/books", (req, res) => {
  Book.find({})
      .then(result => res.json(result))
      .catch(err => res.json(err));
});

// /api/books (post) - Will be used to save a new book to the database.
app.post("/api/books", ({body}, res) => {
  const book = new Book(body);
  Book.create(book)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });
// /api/books/:id (delete) - Will be used to delete a book from the database by BookID.
app.delete("/api/books/:id", (req,res) => {
  Book.deleteOne({ id: req.params.id })
      .then(console.log("delete successful"))
      .catch(err => res.status(422).json(err));
});

// send the apikey
app.get("/api/get_apikey", function (req, res) {
  let apiKey = process.env.API_KEY;
  res.send(apiKey);
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

