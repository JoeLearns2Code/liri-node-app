//enable .env
require("dotenv").config();

//API key file as a variable
var keys = require("./keys.js");

//Access Spotify keys as a variable
var spotify = new Spotify(keys.spotify);

//enable axios
var axios = require("axios");