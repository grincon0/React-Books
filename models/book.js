const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    book_id:{
        type: String
    },
    title:{
        type: String,
        
    },
    authors:{
        type: String,
       
    },
    description:{
        type: String,
       
    },
    image:{
        type: String,
       
    },
    link:{
        type: String,
 
    },
    saved:{
        type: Boolean,
        default: false
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;