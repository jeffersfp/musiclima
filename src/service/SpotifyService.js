'use strict';


const config = require('../config');
const SpotifyWebApi = require('spotify-web-api-node');

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || config.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || config.SPOTIFY_CLIENT_SECRET;

const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
});

/**
 * Get an access token and 'save' it using a setter
 **/
async function clientCredentialsGrant () {
    console.debug('Getting Spotify client token');
    return spotifyApi.clientCredentialsGrant().then(
        (data) => {
            console.debug(`The access token is: ${data.body['access_token']}`);
            spotifyApi.setAccessToken(data.body['access_token']);
        },
        (error) => { console.error(`SpotifyWebApi error: ${error}`) },
    );
}

/**
 * Retrieve songs from Spotify
 *
 * category String Category name
 * country String Country name
 * returns Weather
 **/
exports.getPlaylist = async function (category, country) {
    console.log('Fetching songs from Spotify API');
    await clientCredentialsGrant();
    return spotifyApi.getPlaylistsForCategory(category, {
        country: country,
        offset: 0
    }).then(
        (data) => {
            const playlistsLength = data.body.playlists.items.length;
            console.log(`Found ${playlistsLength} playlist of the category: ${category}`);
            // get a random playlist from the playlists list
            const playlistMetaData = data.body.playlists.items[Math.floor(Math.random()*playlistsLength)];
            return spotifyApi.getPlaylist(playlistMetaData.id).then(
                (data) => {
                    // initialize the playlist in array form
                    const playlistSongs = [];
                    // iterate over the tracks
                    for (let song of data.body.tracks.items) {
                        // build an array with the artists name
                        const artists = [];
                        for (let artist of song.track.artists) {
                            artists.push(artist.name)
                        }
                        // push the song metadata to the playlist
                        playlistSongs.push({
                            name: song.track.name,
                            artists: artists,
                            album: song.track.album.name,
                        });
                    }
                    return Promise.resolve(playlistSongs);
                },
                (error) => {
                    throw new Error(`SpotifyService Songs error: ${error.message}`);
                },
            );
        },
        (error) => { 
            console.error(error);
            throw new Error(`SpotifyService Playlist error: ${error.message}`);
        },
    );
}
