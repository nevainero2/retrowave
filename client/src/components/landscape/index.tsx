import { LandScapeWrapper, LandscapeInner } from './styled'

export type TProps = {
  setActive: any
}

export const Landscape = ({ setActive}: TProps) => (
  <LandScapeWrapper onClick={() => setActive((active: boolean) => !active)}>
    <LandscapeInner />
  </LandScapeWrapper>
)
