import React, { Component } from 'react'
import MusicApiService from '../../services/music-api-service'
import PlayerContent from '../player-content'
import { Turntable } from '../turntable'

import './player.scss'

export default class Player extends Component {
  state = {
    curSongNumber: 0,
    curSongName: '',
    curSongAlbum: '',
    isPlay: false,
    isPlayerActive: false,
    playHystory: []
  }

  componentDidMount = async () => await this.nextAudio(true)

  musicApiService = new MusicApiService()

  toggleActivePlayer = () => {
    this.setState(({ isPlayerActive }) => ({ isPlayerActive: !isPlayerActive }))
    this.props.labelVisibleToggle()
  }

  togglePlay = () => {
    this.setState({ isPlay: !this.state.isPlay }, () => {
      this.state.isPlay ? this.audio.play() : this.audio.pause()
    })
  }

  prevSong = async () => {
    if (this.state.isLoading) return

    const playHystory = this.state.playHystory.slice()
    if (playHystory.length <= 1) return

    this.togglePlay()
    this.setState(({ playHystory }) => {
      const newPlayHystory = playHystory.slice()
      newPlayHystory.pop()
      return { playHystory: newPlayHystory }
    })

    playHystory.pop()
    const newSongNumber = playHystory.pop()
    const { name, album } = await this.musicApiService.getInfo(newSongNumber)

    this.audio = new Audio(`/api/music/song/${newSongNumber}`)
    this.audio.addEventListener('ended', () => this.nextAudio(true))
    this.setState({
      songNumber: newSongNumber,
      curSongName: name,
      curSongAlbum: album
    })
    this.togglePlay()
  }

  nextAudio = async isFirst => {
    if (this.audio) this.togglePlay()

    const size = await this.musicApiService.getSize()
    const newSongNumber = Math.floor(Math.random() * (size - 1))

    const { name, album } = await this.musicApiService.getInfo(newSongNumber)

    this.audio = new Audio(`/api/music/song/${newSongNumber}`)
    this.audio.addEventListener('ended', () => this.nextAudio(true))

    this.setState(({ playHystory }) => {
      const newPlayHystory = playHystory.slice()
      newPlayHystory.push(newSongNumber)
      return {
        curSongNumber: newSongNumber,
        curSongName: name,
        curSongAlbum: album,
        playHystory: newPlayHystory
      }
    })

    if (!isFirst) this.togglePlay()
  }

  render () {
    const {
      curSongNumber,
      isPlayerActive,
      isPlay,
      curSongName,
      curSongAlbum
    } = this.state

    return (
      <>
        <div className='player-wrapper'>
          <div className={isPlayerActive ? 'player active' : 'player'}>
            <Turntable
              curSongNumber={curSongNumber}
              isPlay={isPlay}
              toggleActivePlayer={this.toggleActivePlayer}
              active={isPlayerActive}
            />

            <PlayerContent
              curSongName={curSongName}
              curSongAlbum={curSongAlbum}
              togglePlay={this.togglePlay}
              prevSong={this.prevSong}
              nextAudio={this.nextAudio}
              isPlay={isPlay}
            />
          </div>
        </div>
      </>
    )
  }
}
