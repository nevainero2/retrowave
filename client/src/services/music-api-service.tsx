export default class MusicApiServices {
  getInfo = async (id: number) => {
    const response = await fetch(`/api/music/info/${id}`)
    return await response.json()
  }

  getSize = async () => {
    const response = await fetch('/api/music/size')
    const result = await response.json()
    return result.size
  }
}
