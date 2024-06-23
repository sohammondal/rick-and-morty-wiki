import Box from '@mui/material/Box'
import React from 'react'

import { CharactersWithInfiniteScroll } from './components/CharactersWithInfiniteScroll'
import { CharactersWithVirtualizedList } from './components/CharactersWithVirtualizedList'
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
        <CharactersWithVirtualizedList />
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
