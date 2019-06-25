//enable .env
require("dotenv").config();

//enable Spotify
var Spotify = require("node-spotify-api");

//Spotify API key & Secret file as a variable
var keys = require("./keys");

//Access Spotify key and secret as a variable
var spotify = new Spotify(keys.spotify);

//enable axios
var axios = require("axios");


//variables for user command and search term entry

var command = process.argv[2];
var input = process.argv.slice(3).join('+');



//Switch statement for various LIRI functions
switch (command) {

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