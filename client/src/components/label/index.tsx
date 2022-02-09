import { useMemo } from 'react'

import {
  LabelWrapper,
  FirstString,
  Triangle,
  SecondString,
} from './styled'

export type TLabel = {
  active: boolean
  letters: [string, string]
}

export const Label = ({ active, letters }: TLabel) => {
  const data = useMemo(() => {
    return letters.map(str => str.split(''))
  }, [letters])

  return (
    <>
      <LabelWrapper active={active}>
        <FirstString>
          {data[0].map((letter, i) => (
            <span key={`${letter}-${i}`}>
              {letter}
            </span>
          ))}
        </FirstString>
        <SecondString>
          {data[1].map((letter, i) => (
            <span key={`${letter}-${i}`}>
              {letter}
            </span>
          ))}
        </SecondString>
      </LabelWrapper>
      <Triangle active={active} />
    </>
  )
}