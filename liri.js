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
    console.log("movie-this function");
    break;

case "do-what-it-says":
    console.log("do-what-it-says function");
    break;



};

//FUNCTIONS//

//concert-this

function concertThis () {

var concertQuery = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"

axios.get(concertQuery).then(
    function (response){
       
    // Get function to correctly list each instance of logged data
     for (var i = 0; i < response.data.length; i++){
     console.log("================================="); 
     console.log("Venue: " + response.data[i].venue.name); 
     console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);

    //TODO: Get moment js to display the time correctly  - below doesn't work
    // console.log("Date: " + moment(response.data[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYY, h:mm A')); 

     console.log("Date: " + response.data[i].datetime); }


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







    
}