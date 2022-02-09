import styled, { css, keyframes } from 'styled-components'

export type TProps = {
  isPlay?: boolean
  active: boolean
}

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`

export const Cover = styled.img<TProps>`
  position: absolute;
  cursor: pointer;
  z-index: 1004;
  top: 0;
  left: 0;
  height: 270px;
  width: 270px;
  transition-duration: .5s;

  ${({ active }) => active && css`
    top: 30px;
    left: 340px;
    transition-duration: .5s;
  `}
`

export const DiscCover = styled.img<TProps>`
  position: absolute;
  z-index: 1002;
  height: 120px;
  width: 120px;
  top: 75px;
  left: 75px;
  border-radius: 50%;
  transition-duration: .5s;

  ${({ isPlay }) => isPlay && css`
    animation: ${spin} 1s linear infinite;
    animation-play-state: running;
    transition-duration: .5s;
  `}

  ${({ active }) => active && css`
    top: 105px;
    left: 545px;
    transition-duration: .5s;
  `}
`

export const Disc = styled.div<TProps>`
  position: absolute;
  z-index: 1002;
  background-color: #262121;
  top: 10px;
  left: 10px;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  transition-duration: .5s;
  box-shadow: 0 0 5px #C832D2;

  ${({ active }) => active && css`
    top: 40px;
    left: 480px;
    transition-duration: .5s;
  `}
`

export const WhiteDisc = styled.div<TProps>`
  position: absolute;
  background-color: white;
  z-index: 1003;
  height: 50px;
  width: 50px;
  top: 110px;
  left: 110px;
  border-radius: 50%;
  transition-duration: .5s;

  ${({ active }) => active && css`
    top: 140px;
    left: 580px;
    transition-duration: .5s;
  `}
`