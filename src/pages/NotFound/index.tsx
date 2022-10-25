import styled from '@emotion/styled'
import React from 'react'

import { flexRowCenter } from 'theme/common.styles'

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  ${flexRowCenter}
`

export const NotFound: React.FC = () => {
  return (
    <Container>
      <h1>404: Page Not Found</h1>
    </Container>
  )
}
