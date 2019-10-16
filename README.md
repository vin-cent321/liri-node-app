# LIRI Bot 

### The Problem

Unlike iPhone's SIRI, a Speech and Recognition Interface, LIRI is a Language Interpretation 
and Recognition Interface. LIRI is a command line node app that takes in parameters 
and gives you back data. 

### Overview

By initializing a `package.json` file, third party npm packages were installed in order to allow
other users to run this code and clone this project. 

A `.env` file keeps API key information private so in order to clone this app from github and run it 
yourself, the user will need to supply their own `.env` file for it to work.

The `liri.js` file contains code to read and set environment variables with the dotenv package.
liri.js also takes in the following commands:

* `concert-this`

* `spotify-this`

* `movie-this`

* `do-this`

### What Each Command Does

1. `node liri.js concert-this <artist/band name here>`

This will search the Bands in Town Artist Events API for an artist and render the name of the venue, 
venue location, and date of the event (in moment format "MM/DD/YYYY") for their most upcoming event.

2. `node liri.js spotify-this '<song name here>'`

This will search the Spotify API based on the song the user inputs in terminal/bash and output the artist,
song name, a preview link of the song from Spotify, and the album that the song is from. 

* If no song is provided then your program will default to "The Sign" by Ace of Base.

3. `node liri.js movie-this '<movie name here>'`

This will output the following information to your terminal/bash window from the OMDB API:

```
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
```

* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4. `node liri.js do-this`

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It will run `spotify-this` for "I Want it That Way," as follows the text in `random.txt`.

### Deployed Version Link

`https://vin-cent321.github.io/liri-node-app/`

### Video Link

`https://drive.google.com/file/d/12xByAWc4kS2Y3k5Z8rsoRLIfSL2s30To/view`
