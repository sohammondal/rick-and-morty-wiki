import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import React from 'react'

import { useCharactersContext } from '../../context'

export const ListRenderStrategySelector: React.FC = () => {
  const { loadingStrategy, setLoadingStrategy } = useCharactersContext()

  return (
    <ButtonGroup sx={{ padding: '1.8rem' }} size='small'>
      <Button
        variant={loadingStrategy === 'infinite-scroll' ? 'contained' : 'outlined'}
        style={{
          color: loadingStrategy === 'infinite-scroll' ? 'white' : 'inherit',
        }}
        onClick={() => {
          setLoadingStrategy('infinite-scroll')
        }}
      >
        infinite scroll
      </Button>
      <Button
        style={{
          color: loadingStrategy === 'virtualized-list' ? 'white' : 'inherit',
        }}
        onClick={() => {
          setLoadingStrategy('virtualized-list')
        }}
        variant={loadingStrategy === 'virtualized-list' ? 'contained' : 'outlined'}
      >
        virtualized list
      </Button>
    </ButtonGroup>
  )
}
