import React from 'react'
import { Cover, Disc, DiscCover, WhiteDisc } from './styled'

export type TTurntable = {
  curSongNumber: number
  toggleActivePlayer: () => any
  isPlay: boolean
  active: boolean
}

export const Turntable = ({
  curSongNumber,
  toggleActivePlayer,
  isPlay,
  active,
}: TTurntable) => (
  <>
    <Cover
      src={`/api/music/img/${curSongNumber}`}
      onClick={toggleActivePlayer}
      alt='Тут должна быть обложка, но походу что-то сломалось'
      active={active}
    />
    <Disc active={active}/>
    <DiscCover
      isPlay={isPlay}
      src={`/api/music/img/${curSongNumber}`}
      alt='Тут должна быть обложка, но походу что-то сломалось'
      active={active}
    />
    <WhiteDisc active={active} />
  </>
)

