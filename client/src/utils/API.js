import axios from "axios";

export default {
    getAllSavedBooks : function(){
        return axios.get("/api/books");
    },
    deleteBook : function(id){
        return axios.delete(`/api/books/${id}`);
    },

    getGoogleSearchBooks: function(query){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`)
    },
    getDefaultGoogleBooks: function(){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=Food+Of+The+Gods&maxResults=10`)
    },
    saveBook: function(bookData) {

        return axios.post("/api/books", bookData);
      }

}