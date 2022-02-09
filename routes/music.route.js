"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var musicService = require('../data/music-service');
var Router = require('express').Router;
var router = Router();
router.get('/song/:id', function (req, res) {
    var id = req.params.id;
    var song = musicService.getMusicById(Number(id));
    res.sendFile(song.path);
});
router.get('/img/:id', function (req, res) {
    var id = req.params.id;
    var song = musicService.getMusicById(Number(id));
    res.sendFile(song.imgPath);
});
router.get('/info/:id', function (req, res) {
    var id = req.params.id;
    var _a = musicService.getMusicById(Number(id)), name = _a.name, album = _a.album;
    res.json({ name: name, album: album });
});
router.get('/size', function (req, res) {
    res.json({ size: musicService.size });
});
module.exports = router;
//# sourceMappingURL=music.route.js.map