require("dotenv").config();

let request = require("request");

const fs = require("fs");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

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

