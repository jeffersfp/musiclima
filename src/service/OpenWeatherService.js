'use strict';


const axios = require('axios');
const config = require('../config');

// The OPENWEATHER_API_KEY from env var or .env file
const APPID = process.env.OPENWEATHER_API_KEY || config.OPENWEATHER_API_KEY;

/**
 * Retrieve Weather information from a given city name
 *
 * city String City name
 * returns Weather
 **/
exports.retrieveWeatherByCityName = async function (city) {
    console.log(`Fetching weather of ${city} from OpenWeather API`);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APPID}`;
    try {
        console.debug('Fetching OpenWeather data for city: ', city);
        const response = await axios.get(url);
        if (response.status != 200) {
            throw new Error(`OpenWeatherService error: ${error.message}`);
        }
        return response.data;
    } catch (error) {
        console.error(`OpenWeatherService error: ${error.message}`);
        throw new Error(`OpenWeatherService error: ${error.message}`);
    }
}
