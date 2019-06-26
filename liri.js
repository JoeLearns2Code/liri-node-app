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

//enable moment
var moment = require("moment");


//variables for user command and search term entry

var command = process.argv[2];
var input = process.argv.slice(3).join(' ');



//Switch statement for various LIRI functions
switch (command) {

case "concert-this":
    // console.log("concert-this function");
    concertThis();
    break;

case "spotify-this-song":
    // console.log("spotify-this-song function");
    spotifyThisSong();
    break;

case "movie-this":
    // console.log("movie-this function");
    movieThis();
    break;

case "do-what-it-says":
    console.log("do-what-it-says function");
    break;



};

//FUNCTIONS//

//concert-this

function concertThis () {

var concertQueryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"

axios.get(concertQueryURL).then(
    function (response){
       
    // Get function to correctly list each instance of logged data
     for (var i = 0; i < response.data.length; i++){
     console.log("================================="); 
     console.log("Venue: " + response.data[i].venue.name); 
     console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);

    //Use moment js to display the time correctly
     console.log("Date: " + moment(response.data[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A')); 

      };


    }
);



};


//spotify-this-song

function spotifyThisSong(){

    spotify.search({ type: 'track', query: input , limit: 5
    }).then(function(response){
     console.log("Artist(s): " + response.tracks.items[0].artists[0].name);
     console.log("Song Title: " + response.tracks.items[0].name);
     console.log("Preview Link: " + response.tracks.items[0].preview_url);
     console.log("Album: " + response.tracks.items[0].album.name);


    });


};


//movie-this 

function movieThis(){

var movieQueryURL = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

axios.get(movieQueryURL).then(function(response){
console.log("==========================");
console.log("Title: " + response.data.Title);
console.log("Release year: " + response.data.Released);
console.log("IMDB rating: " + response.data.imdbRating);
console.log("Rotten Tomatoes Shill Rating: " + response.data.Ratings[1].Value);
console.log("Produced in: " + response.data.Country);
console.log("Language: " + response.data.Language);
console.log("Plot summary: " + response.data.Plot);
console.log("Actors: " + response.data.Actors);


});

};
