require("dotenv").config();

let request = require("request");

var fs = require('fs');

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var moment = require('moment');

let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

function userCommand(userInput, userQuery) {
    switch (userInput) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this":
            spotifyThisSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-this":
            doThis(userQuery);
            break;
        default:
            console.log("I don't understand");
            break;
    }
}

userCommand(userInput, userQuery);

function concertThis() {


    var bandQueryURL = "https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp"

    axios.get(bandQueryURL).then(
        function (response) {
            console.log("Searching for..." + userQuery + "'s next show...");
            console.log("Name of venue: " + response.data[0].venue.name + "\nVenue Location: " + response.data[0].venue.city + "\nDate of event: " + moment(response.data[0].datatime).format("MM-DD-YYYY"));
        });
}

function spotifyThisSong() {
    console.log("Searching for..." + userQuery);

    if (!userQuery) {
        userQuery = "the sign ace of base"
    };

    spotify.search({
        type: 'track',
        query: userQuery,
        limit: 1
    }, function (error, data) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }

        let spotifyArr = data.tracks.items;

        for (i = 0; i < spotifyArr.length; i++) {
            console.log("Artist: " + data.tracks.items[i].album.artists[0].name + "\nSong: " + data.tracks.items[i].name + "\nSpotify link: " + data.tracks.items[i].external_urls.spotify + "\nAlbum: " + data.tracks.items[i].album.name)
        }

    });
}

function movieThis() {
    console.log("Searching for..." + userQuery);
    if (!userQuery) {
        userQuery = "mr nobody"
    };

    axios.get("http://www.omdbapi.com/?t=" + userQuery + "&apikey=eae9daa4").then(
        function (response) {

            let ratingsArr = response.data.Ratings;
            if (ratingsArr.length > 2) {}

            if (userQuery) {
                console.log("Title " + response.data.Title + "\nCast: " + response.data.Actors + "\nReleased: " + response.data.Year + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nIMDB Rating: " + response.data.imdbRating + "\nCountry: " + response.data.Country + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value)
            } else {
                return console.log("Movie able to be found, Error:" + error)
            };

        }
    );
}

function doThis() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        let dataArr = data.split(",");

        userInput = dataArr[0];
        userQuery = dataArr[1];

        userCommand(userInput, userQuery);
    })
}