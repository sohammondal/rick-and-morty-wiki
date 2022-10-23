import styled from '@emotion/styled'
import React from 'react'

import { flexRowCenter } from 'theme/common.styles'

export const Section = styled.section`
  ${flexRowCenter}
  min-height: 100vh;
  background-color: #202329;
  color: #fff;
`

export const Characters: React.FC = () => {
  return <Section>Characters</Section>
}
