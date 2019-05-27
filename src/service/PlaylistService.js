'use strict';


const OpenWeatherService = require('./OpenWeatherService');

/**
 * Find songs that match the weather!
 *
 * city String City name
 * returns Playlist
 **/
exports.findSongsByCityName = async function (city) {
    try {
        const weather = await OpenWeatherService.retrieveWeatherByCityName(city);
        console.debug('PlaylistService call: success');
        return weather;
    } catch (error) {
        console.error('PlaylistService error: ', error);
        return new Error(error);
    }
}
