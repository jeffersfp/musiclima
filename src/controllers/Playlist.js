'use strict';

const utils = require('../utils/writer.js');
const Playlist = require('../service/PlaylistService');

module.exports.findSongsByCityName = function findSongsByCityName(req, res, next) {
    const city = req.swagger.params['city'].value;
    Playlist.findSongsByCityName(city)
        .then(playlist => utils.writeJson(res, playlist))
        .catch(err => utils.writeJson(res, {'error': err.message}, 400));
};
