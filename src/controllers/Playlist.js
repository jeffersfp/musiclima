'use strict';

const utils = require('../utils/writer.js');
const Playlist = require('../service/PlaylistService');

module.exports.findSongsByCityName = function findSongsByCityName(req, res, next) {
    var city = req.swagger.params['city'].value;
    Playlist.findSongsByCityName(city)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
