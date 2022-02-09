// @ts-ignore
var path = require('path');
// @ts-ignore
var config = require('./config.json');
var size = 0;
var data = config.data.map(function (album) {
    return album.songs.map(function (song) { return ({
        id: size++,
        name: song,
        album: album.title,
        path: path.resolve(__dirname, 'music', album.title, "".concat(song, ".mp3")),
        imgPath: path.resolve(__dirname, 'img', "".concat(album.title, ".jpg")),
    }); });
}).flat();
module.exports = {
    size: size,
    data: data,
    getMusicById: function (id) {
        return data.find(function (item) { return item.id === id; });
    },
    getMusicByName: function (name) {
        return data.find(function (item) { return item.name === name; });
    },
};
//# sourceMappingURL=music-service.js.map