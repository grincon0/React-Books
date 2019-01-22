import axios from "axios";

export default{
    getGoogleSearchBooks: function(query){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`)
    },
    getDefaultGoogleBooks: function(){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=Food+Of+The+Gods&maxResults=10`)
    }

}