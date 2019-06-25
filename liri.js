//enable .env
require("dotenv").config();

//API key file as a variable
var keys = require("./keys.js");

//Access Spotify keys as a variable
var spotify = new Spotify(keys.spotify);

//enable axios
var axios = require("axios");

//variable for user entry

var input = process.argv.slice(2).join(' ')

//Switch statement for various LIRI functions
switch (input) {

case "concert-this":
    console.log("concert-this function");
    break;

case "spotify-this-song":
    console.log("spotify-this-song function");
    break;

case "movie-this":
    console.log("movie-this function");
    break;

case "do-what-it-says":
    console.log("do-what-it-says function");
    break;



}