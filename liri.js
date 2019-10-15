require("dotenv").config();

let request = require("request");

var fs = require('fs');

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var bandsintown = (keys.bandsintown);

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