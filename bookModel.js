const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    id: { type: String, required: true },
    authors: { type: [String], required: true },
    description: {type: String},
    imgsrc: {type: String},
    link: {type: String},
    title: { type: String, required: true }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;

