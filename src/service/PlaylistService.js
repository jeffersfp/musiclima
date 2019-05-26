'use strict';


/**
 * Find songs that match the weather!
 *
 * city String City name
 * returns Playlist
 **/
exports.findSongsByCityName = function (city) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        examples['application/json'] = {
            "songs": ["songs", "songs"]
        };
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}
