import styled from '@emotion/styled'

import { flexCol, flexRowCenter, media } from 'theme/common.styles'

export const Section = styled.section`
  ${flexCol}
  align-items: center;
  padding: 5vh 10vh;

  min-height: 100vh;
  width: 100vw;

  background-color: #202329;
  color: #fff;

  ${media.tabletPortrait} {
    padding: 5vh;
  }
`

export const CharacterCards = styled.div`
  ${flexRowCenter}
  flex-wrap: wrap;
`
