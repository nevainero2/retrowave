const path = require('path')
const config: TConfig = require('./config.json')

type TAlbum = {
  title: string
  songs: Array<string>
}

type TConfig = {
  data: Array<TAlbum>
}

type TDataItem = {
  id: number,
  name: string,
  album: string,
  path: string,
  imgPath: string
}

let size = 0

const data: Array<TDataItem> = config.data.map((album) => {
  return album.songs.map((song) => ({
    id: size++,
    name: song,
    album: album.title,
    path: path.resolve(
      __dirname, 'music', album.title, `${song}.mp3`,
    ),
    imgPath: path.resolve(
      __dirname, 'img', `${album.title}.jpg`,
    ),
  }))
}).flat()

module.exports = {
  size,
  data,
  getMusicById: (id: number) => {
    return data.find(item => item.id === id)
  },
  getMusicByName: (name: string) => {
    return data.find(item => item.name === name)
  },
}
