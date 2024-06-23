import Box from '@mui/material/Box'
import React from 'react'

import { CharactersWithInfiniteScroll } from './components/CharactersWithInfiniteScroll'
import { ListRenderStrategySelector } from './components/ListRenderStrategySelector'
import { CharactersContextProvider, useCharactersContext } from './context'

export const CharactersInternal: React.FC = () => {
  const { loadingStrategy } = useCharactersContext()

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <ListRenderStrategySelector />
      {loadingStrategy === 'infinite-scroll' ? (
        <CharactersWithInfiniteScroll />
      ) : (
        <div>Characters</div>
      )}
    </Box>
  )
}

export const Characters: React.FC = () => {
  return (
    <CharactersContextProvider>
      <CharactersInternal />
    </CharactersContextProvider>
  )
}
