import styled from '@emotion/styled'

import { flexRowCenter, media } from 'theme/common.styles'

export const Section = styled.section`
  display: block;

  padding: 5vh 15px;

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
