import React from 'react'

import { Wrapper } from './styles'

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <a href='https://github.com/sohammondal/rick-and-morty-wiki' target='_blank' rel='noreferrer'>
        ❮❯{' '}
      </a>
      by{' '}
      <a href='https://sohammondal.com/' target='_blank' rel='noreferrer'>
        Soham Mondal
      </a>
    </Wrapper>
  )
}
