import styled, { css, keyframes } from 'styled-components'

export type TProps = {
  active: boolean
}

const scaleInCenter = keyframes`
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
`

const scaleOutCenter = keyframes`
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
`

export const LabelWrapper = styled.div<TProps>`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 100px;
  z-index: 50;

  ${({ active }) => active ? css`
    -webkit-animation: ${scaleInCenter} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${scaleInCenter} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  ` : css`
    -webkit-animation: ${scaleOutCenter} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: ${scaleOutCenter} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  `}
`

export const Triangle = styled.div<TProps>`
  z-index: 0;
  position: absolute;
  margin: auto;
  bottom: 100px;
  left: 40px;
  right: 0;
  width: 0;
  height: 0;
  border-left: 200px solid transparent;
  border-right: 300px solid transparent;
  border-bottom: 200px solid rgba(5, 5, 5, 0.33);

  ${({ active }) => active ? css`
    -webkit-animation: ${scaleInCenter} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: ${scaleInCenter} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  ` : css`
    -webkit-animation: ${scaleOutCenter} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: ${scaleOutCenter} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  `}
`

export const FirstString = styled.span`
  font-size: 5.2em;
  text-transform: uppercase;
  color: transparent;
  font-weight: 800;
  position: relative;
  display: block;
  letter-spacing: 0;
  -webkit-transform: rotate(-10deg) skew(-20deg);
  transform: rotate(-10deg) skew(-20deg);
  line-height: 1em;

  > span {
    -webkit-text-stroke: 2px #F4C6F4;
    margin-top: -8px;
    display: inline-block;
    padding: 0 1px;
    -webkit-animation: glow 2.5s linear infinite;
    animation: glow 2.5s linear infinite;
  }
`

export const SecondString = styled.span`
  font-size: 5.5em;
  font-weight: 800;
  display: block;
  text-transform: uppercase;
  letter-spacing: -12px;
  -webkit-transform: rotate(-10deg) skew(-15deg);
  transform: rotate(-10deg) skew(-15deg);
  line-height: 1em;

  > span {
    display: inline-block;
    padding: 0 10px;
    margin: 0 -10px;
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIzMiUiIHN0b3AtY29sb3I9IiMxODE5MWEiLz48c3RvcCBvZmZzZXQ9IjQwJSIgc3RvcC1jb2xvcj0iIzE1N2JlNiIvPjxzdG9wIG9mZnNldD0iNTIlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+PHN0b3Agb2Zmc2V0PSI1NiUiIHN0b3AtY29sb3I9IiMxODE5MWEiLz48c3RvcCBvZmZzZXQ9Ijg1JSIgc3RvcC1jb2xvcj0iIzE1N2JlNiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==");
    background: -webkit-gradient(linear, left top, left bottom, color-stop(32%, #18191a), color-stop(40%, #157be6), color-stop(52%, #ffffff), color-stop(56%, #18191a), color-stop(85%, #157be6), to(#ffffff));
    background: linear-gradient(to bottom, #18191a 32%, #157be6 40%, #ffffff 52%, #18191a 56%, #157be6 85%, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #FFF;
  }
`
