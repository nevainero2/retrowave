import React from 'react'

export default function PlayerContentx (props) {
  const {
    prevSong,
    togglePlay,
    nextAudio,
    isPlay,
    curSongName,
    curSongAlbum
  } = props

  return (
    <div className='player-content'>
      <p className='name'>{curSongName}</p>
      <p className='album'>{curSongAlbum}</p>
      <div className='control'>
        {/* <i class='fas fa-th-list fa-2x'></i> */}

        <i className='fas fa-backward fa-2x' onClick={prevSong}></i>

        {!isPlay ? (
          <i className='fas fa-play fa-2x' onClick={togglePlay}></i>
        ) : (
          <i className='fas fa-pause fa-2x' onClick={togglePlay}></i>
        )}

        <i
          className='fas fa-forward fa-2x'
          onClick={() => nextAudio(false)}
        ></i>

        {/* <i class='far fa-heart fa-2x'></i> */}
      </div>
    </div>
  )
}
