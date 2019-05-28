'use strict';


const OpenWeatherService = require('./OpenWeatherService');
const SpotifyService = require('./SpotifyService');

/**
 * 
 **/
function getMusicCategoryByWeather(weather) {
    const temp = weather.main.temp;
    if (temp < 10) {
        return 'classical';
    } else if (temp >= 10 && temp < 25) {
        return 'rock';
    } else {
        return 'pop';
    }
}

/**
 * Find songs that match the weather!
 *
 * city String City name
 * returns Playlist
 **/
exports.findSongsByCityName = async function (city) {
    try {
        const weather = await OpenWeatherService.retrieveWeatherByCityName(city);
        const musicCategory = getMusicCategoryByWeather(weather);
        const playlist = await SpotifyService.getPlaylist(musicCategory, weather.sys.country);
        console.debug('PlaylistService call: success');
        return playlist;
    } catch (error) {
        console.error(`PlaylistService error: ${error}`);
        throw new Error(error.message);
    }
}
