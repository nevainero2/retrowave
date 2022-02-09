import { useState } from 'react'

import { Landscape } from '../landscape'
import { Label } from '../label'
import Player from '../player'

const data: [string, string] = ['Retro', 'Wave']

export const App = () => {
  const [active, setActive] = useState<boolean>(true)

  return (
    <>
      <Landscape setActive={setActive} />
      <Label active={active} letters={data} />
      <Player />
    </>
  )
}