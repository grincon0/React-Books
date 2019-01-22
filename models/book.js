const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    book_id:{
        type: String
    },
    title:{
        type: String,
        required: true
    },
    authors:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true,
    },
    link:{
        type: String,
        required: true,
    },
    saved:{
        type: Boolean,
        default: false
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;