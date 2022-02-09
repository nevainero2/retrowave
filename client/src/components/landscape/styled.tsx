import styled, { keyframes } from 'styled-components'

const backgroundMoveUp = keyframes`
  0% {
    background-position: -1px -1px, -1px -1px;
  }

  100% {
    background-position: -50px -50px, -1px -1px;
  }
`;

export const LandscapeInner = styled.div`
  position: absolute;
  border: 1px solid white;
  width: 200%;
  left: -50%;
  height: 130%;
  bottom: -30%;
  background-image: -webkit-linear-gradient(top, #CF33D9 2px, transparent 2px), -webkit-linear-gradient(left, #CF33D9 2px, transparent 2px);
  background-size: 50px 50px, 80px 80px;
  background-position: -1px -1px, -1px -1px;
  -webkit-transform: rotateX(85deg);
  transform: rotateX(85deg);
  -webkit-animation: moveUp 1s infinite linear;
  animation: ${backgroundMoveUp} 1s infinite linear;
`

export const LandScapeWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 auto;
  -webkit-perspective: 180px;
  perspective: 180px;
  -webkit-perspective-origin: 50% 40%;
  perspective-origin: 50% 40%;
`
